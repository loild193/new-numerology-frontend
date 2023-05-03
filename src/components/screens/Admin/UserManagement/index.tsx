import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useQuery } from '@tanstack/react-query'
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
import { REACT_QUERY_KEY } from '@models/keys'
import useChangeRoute from '@hooks/useChangeRoute'
import { useDebounce } from '@hooks/useDebounce'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'

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

export const UserManagement: React.FC<Props> = ({ page, keyword, filter, startPage, limit }) => {
  const router = useRouter()

  const [usersFilter, setUsersFilter] = useState<IUsersProps>({
    keyword,
    filter,
  })
  const [currentPageStats, setCurrentPageStats] = useState<Page>({
    page: Number(page),
    startPage: Number(startPage),
    limit: Number(limit),
  })

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

  const listUsers = users?.response?.users
  const pagination = users?.response?.pagination

  return (
    <>
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
                <Table.Cell className="whitespace-nowrap dark:text-white">{user.username}</Table.Cell>
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
                  <Link
                    href={`/admin/users/${user.id}`}
                    className="font-medium text-red-600 cursor-pointer dark:text-red-500
                  transition hover:text-red-400"
                  >
                    <RemoveIcon width="24px" height="24px" />
                  </Link>
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
