/* eslint-disable max-len */
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Table, Pagination as Pagi } from 'flowbite-react'

import { EditIcon, RemoveIcon } from '@components/common/Icon'
import UsersFilter, { IUsersProps } from '@components/screens/Users/FilterUsers'
import {
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_ITEM_PER_PAGE,
  DEFAULT_START_PAGE,
  ERROR_MAPPING,
  LIST_USER_FILTER,
  ServerResponse,
} from '@models/api/admin/getUsers'
import { ServerResponse as DeleteUserServerResponse } from '@models/api/admin/deleteUser'
import { REACT_QUERY_KEY } from '@models/keys'
import useChangeRoute from '@hooks/useChangeRoute'
import { useDebounce } from '@hooks/useDebounce'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'
import { ErrorFromNextApi } from '@models/api'

type Page = {
  page: number
  startPage: number
  limit: number
}

type Props = {
  page: string
  keyword: string
  filter: LIST_USER_FILTER
  startPage: string
  limit: string
}

const fetchUsers = async (input: IUsersProps) => {
  try {
    const response = await fetch('/api/admin/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
      credentials: 'same-origin',
    })
    const rawResponse = (await response.json()) as ServerResponse

    return rawResponse
  } catch (error) {
    logger.error('[fetchUsers]', error)
  }
}

const deleteUser = async (input: any) => {
  try {
    const response = await fetch('/api/admin/delete-user', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
      credentials: 'same-origin',
    })

    console.log('response: ', response)
    const rawResponse = (await response.json()) as DeleteUserServerResponse | ErrorFromNextApi
    return rawResponse
  } catch (error) {
    logger.error('[deleteUsers]', error)
  }
}

export const UserManagement: React.FC<Props> = ({ page, keyword, filter, startPage, limit }) => {
  const router = useRouter()
  const queryClient = useQueryClient()

  const [usersFilter, setUsersFilter] = useState<IUsersProps>({
    keyword,
    filter,
  })
  const [currentPageStats, setCurrentPageStats] = useState<Page>({
    page: Number(page),
    startPage: Number(startPage),
    limit: Number(limit),
  })
  const [isShowModal, setIsShowModal] = useState<boolean>(false)
  const [selectedUserId, setSelectUserId] = useState<string>()

  const { changeRoute } = useChangeRoute()
  const debouncedKeyword = useDebounce(usersFilter.keyword, 500)

  const {
    data: users,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [REACT_QUERY_KEY.ADMIN_GET_USERS, usersFilter.filter, debouncedKeyword, currentPageStats],
    queryFn: () => fetchUsers({ ...usersFilter, keyword: debouncedKeyword, ...currentPageStats }),
    retry: 2,
    onError: (error: any) => {
      logger.error('[fetchUsers]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

  const { mutate } = useMutation({
    mutationFn: deleteUser,
    onSuccess: (data) => {
      if (data && data.success) {
        void queryClient.invalidateQueries([REACT_QUERY_KEY.ADMIN_GET_USERS])
        notify(NOTIFICATION_TYPE.SUCCESS, 'Xoá thông tin thành công')
        setTimeout(() => {
          void router.push('/admin/users')
        }, 2000)
      } else {
        logger.error('[deleteUser]', (data as ErrorFromNextApi)?.message)
        notify(
          NOTIFICATION_TYPE.ERROR,
          ERROR_MAPPING.get((data as ErrorFromNextApi)?.message ?? '') ?? DEFAULT_ERROR_MESSAGE,
        )
      }
    },
    onError: (error: any) => {
      logger.error('[deleteUser]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

  useEffect(() => {
    const page = (router.query?.page as string) ?? '1'
    const keyword = (router.query?.keyword as string) ?? ''
    const filter = (router.query?.filter as LIST_USER_FILTER) ?? LIST_USER_FILTER.ALL
    const startPage = (router.query?.startPage as string) ?? `${DEFAULT_START_PAGE}`
    const limit = (router.query?.limit as string) ?? `${DEFAULT_ITEM_PER_PAGE}`
    setCurrentPageStats({
      page: Number(page),
      startPage: Number(startPage),
      limit: Number(limit),
    })
    setUsersFilter({ keyword, filter })
  }, [router.isReady])

  const handleChangePage = (page: number) => {
    const newPageStats: Page = {
      page,
      startPage: page,
      limit: DEFAULT_ITEM_PER_PAGE,
    }
    setCurrentPageStats(newPageStats)
    changeRoute(newPageStats)
  }

  const onOpenModal = (id: string) => {
    setIsShowModal(true)
    setSelectUserId(id)
  }

  const onCloseModal = () => {
    setIsShowModal(false)
  }

  const onDeleteUser = () => {
    mutate({ id: selectedUserId })

    onCloseModal()
  }

  const listUsers = users?.response?.users
  const pagination = users?.response?.pagination

  return (
    <>
      {isShowModal && (
        <div
          id="defaultModal"
          className="fixed top-0 left-0 right-0 z-50 h-screen w-screen flex justify-center items-center"
          style={{ backgroundColor: 'rgba(103, 92, 98, 0.25)' }}
        >
          <div className="w-96 mb-32">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Xoá người dùng</h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="defaultModal"
                  onClick={onCloseModal}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-6 space-y-6">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Bạn có chắc muốn xoá người dùng?
                </p>
              </div>
              <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  onClick={onDeleteUser}
                >
                  Đồng ý
                </button>
                <button
                  data-modal-hide="defaultModal"
                  type="button"
                  className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                  onClick={onCloseModal}
                >
                  Huỷ
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <UsersFilter usersFilter={usersFilter} handleChangeValue={setUsersFilter} />
      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Họ và tên</Table.HeadCell>
          <Table.HeadCell>Tên đăng nhập</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Số điện thoại</Table.HeadCell>
          <Table.HeadCell>Số lần tra cứu</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Chỉnh sửa</span>
          </Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Xoá</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {isLoading ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center text-xl">
              <Table.Cell />
              <Table.Cell />
              <Table.Cell />
              <Table.Cell>Vui lòng chờ ...</Table.Cell>
              <Table.Cell />
            </Table.Row>
          ) : null}
          {isError ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center text-xl">
              <Table.Cell />
              <Table.Cell />
              <Table.Cell />
              <Table.Cell>Có lỗi xảy ra. Vui lòng thử lại sau</Table.Cell>
              <Table.Cell />
            </Table.Row>
          ) : null}
          {!listUsers || listUsers.length === 0 ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center text-xl">
              <Table.Cell />
              <Table.Cell />
              <Table.Cell />
              <Table.Cell>Không có dữ liệu</Table.Cell>
              <Table.Cell />
            </Table.Row>
          ) : null}
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((user, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap dark:text-white">
                  <Link
                    href={`/admin/users/${user.id}/search-numerology`}
                    className="text-blue-600"
                    title="Chỉnh sửa số lần tra cứu"
                  >
                    {user.username ?? 'Chưa có'}{' '}
                  </Link>
                </Table.Cell>
                <Table.Cell className="font-medium text-gray-900">{user.userId ?? 'Chưa có'}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone ?? 'Chưa có'}</Table.Cell>
                <Table.Cell>
                  <Link
                    href={`/admin/users/${user.id}/update-search-amount`}
                    className="text-blue-600"
                    title="Chỉnh sửa số lần tra cứu"
                  >
                    {user.searchAmountLeft ?? 'Chưa có'}{' '}
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <Link
                    href={`/admin/users/${user.id}`}
                    className="font-medium text-blue-600 cursor-pointer dark:text-blue-500
                  transition hover:text-blue-400"
                  >
                    <EditIcon width="24px" height="24px" />
                  </Link>
                </Table.Cell>
                <Table.Cell>
                  <button
                    onClick={() => onOpenModal(user.id)}
                    className="font-medium text-red-600 cursor-pointer dark:text-red-500
                  transition hover:text-red-400"
                  >
                    <RemoveIcon width="24px" height="24px" />
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
      <div className="flex items-center justify-center text-center mt-8">
        <Pagi
          layout="pagination"
          previousLabel="Trước"
          nextLabel="Sau"
          currentPage={currentPageStats.page}
          showIcons={true}
          totalPages={pagination?.totalPages ?? 1}
          onPageChange={handleChangePage}
        />
      </div>
    </>
  )
}
