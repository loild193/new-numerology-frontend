import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { Table, Pagination as Pagi } from 'flowbite-react'
import {
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_ITEM_PER_PAGE,
  DEFAULT_START_PAGE,
  ERROR_MAPPING,
  ServerResponse,
} from '@models/api/admin/getSearchNumerologies'
import { REACT_QUERY_KEY } from '@models/keys'
import useChangeRoute from '@hooks/useChangeRoute'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'
import { formatDate } from '@utils/formatTime'

type Page = {
  page: number
  startPage: number
  limit: number
}

type Props = {
  page: string
  startPage: string
  limit: string
}

const fetchSearchNumerologies = async (input: any) => {
  try {
    const response = await fetch('/api/admin/search-numerologies', {
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
    logger.error('[fetchSearchNumerologies]', error)
  }
}

export const ListSearchNumerology: React.FC<Props> = ({ page, startPage, limit }) => {
  const router = useRouter()
  const { id } = router.query

  const [currentPageStats, setCurrentPageStats] = useState<Page>({
    page: Number(page),
    startPage: Number(startPage),
    limit: Number(limit),
  })

  const { changeRoute } = useChangeRoute()
  const {
    data: searchRecords,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [REACT_QUERY_KEY.ADMIN_GET_SEARCH_NUMEROLOGIES, currentPageStats],
    queryFn: () => fetchSearchNumerologies({ id, ...currentPageStats }),
    retry: 2,
    onError: (error: any) => {
      logger.error('[fetchSearchNumerologies]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

  //   const formatDate = (strDate: string) => {
  //     const d = new Date(strDate)

  //     const formattedDate =
  //       // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  //       ('0' + d.getHours()).slice(-2) +
  //       ':' +
  //       // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  //       ('0' + d.getMinutes()).slice(-2) +
  //       ' ' +
  //       // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  //       ('0' + d.getDate()).slice(-2) +
  //       '/' +
  //       // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
  //       ('0' + (d.getMonth() + 1)).slice(-2) +
  //       '/' +
  //       d.getFullYear()

  //     return formattedDate
  //   }

  useEffect(() => {
    const page = (router.query?.page as string) ?? '1'
    const startPage = (router.query?.startPage as string) ?? `${DEFAULT_START_PAGE}`
    const limit = (router.query?.limit as string) ?? `${DEFAULT_ITEM_PER_PAGE}`
    setCurrentPageStats({
      page: Number(page),
      startPage: Number(startPage),
      limit: Number(limit),
    })
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

  const listSearchRecords = searchRecords?.response?.searchRecords
  const pagination = searchRecords?.response?.pagination

  return (
    <>
      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>Tên đăng nhập</Table.HeadCell>
          <Table.HeadCell>Họ và tên</Table.HeadCell>
          <Table.HeadCell>Ngày sinh</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Số điện thoại</Table.HeadCell>
          <Table.HeadCell>Ngày tra cứu</Table.HeadCell>
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
          {!listSearchRecords || listSearchRecords.length === 0 ? (
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800 text-center text-xl">
              <Table.Cell />
              <Table.Cell />
              <Table.Cell />
              <Table.Cell>Không có dữ liệu</Table.Cell>
              <Table.Cell />
            </Table.Row>
          ) : null}
          {listSearchRecords &&
            listSearchRecords.length > 0 &&
            listSearchRecords.map((record, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{record.userId}</Table.Cell>
                <Table.Cell className="whitespace-nowrap dark:text-white">{record.name}</Table.Cell>
                <Table.Cell className="font-medium text-gray-900">{record.birthday ?? '...'}</Table.Cell>
                <Table.Cell>{record.company ?? '...'}</Table.Cell>
                <Table.Cell>{record.phone ?? '...'}</Table.Cell>
                <Table.Cell>{record.createdAt ? formatDate(record.createdAt) : '...'}</Table.Cell>
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
