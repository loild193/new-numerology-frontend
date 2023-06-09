import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getCookie } from 'cookies-next'
import AdminLayout from '@components/layouts/AdminLayout'
import Title from '@components/common/Title'
import { UserManagement } from '@components/screens/Admin/UserManagement'
import { ROLE } from '@models/api/authentication/login'
import { DEFAULT_ITEM_PER_PAGE, DEFAULT_START_PAGE, LIST_USER_FILTER } from '@models/api/admin/getUsers'
import { COOKIES_KEY } from '@models/keys'
import { AccountInfo } from '@src/zustand/accountInfo'
import { STATUS_ACCESS_TOKEN, checkAccessToken } from '@utils/accessToken'
import { safeParseJSON } from '@utils/json'

type QueryParams = { page: string; keyword: string; filter: LIST_USER_FILTER; startPage: string; limit: string }

const UsersPage = ({
  page,
  keyword,
  filter,
  startPage,
  limit,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AdminLayout>
      <Title title="Quản lý người dùng" />
      <UserManagement page={page} keyword={keyword} filter={filter} startPage={startPage} limit={limit} />
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps<QueryParams> = async ({ req, res, query }) => {
  const accountInfoFromCookie = getCookie(COOKIES_KEY.ACCOUNT_INFO, {
    req,
    res,
  }) as string

  if (accountInfoFromCookie) {
    let rawAccountInfo: AccountInfo | null = null
    try {
      rawAccountInfo = safeParseJSON<AccountInfo>(accountInfoFromCookie ?? '{}')
    } catch (error) {
      console.log('[parseAccountInfo]', error)
    }
    if (!rawAccountInfo) {
      return {
        redirect: {
          permanent: false,
          destination: '/login',
        },
      }
    }
    const checkAccessTokenResult = checkAccessToken(rawAccountInfo.accessToken)
    if (
      checkAccessTokenResult.status === STATUS_ACCESS_TOKEN.UNEXPIRED &&
      checkAccessTokenResult.data?.role === ROLE.ADMIN
    ) {
      return {
        props: {
          page: (query?.page as string) ?? '1',
          keyword: (query?.keyword as string) ?? '',
          filter: (query?.filter as LIST_USER_FILTER) ?? LIST_USER_FILTER.ALL,
          startPage: (query?.startPage as string) ?? `${DEFAULT_START_PAGE}`,
          limit: (query?.limit as string) ?? `${DEFAULT_ITEM_PER_PAGE}`,
        },
      }
    }

    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    }
  }

  return {
    redirect: {
      permanent: false,
      destination: '/login',
    },
  }
}

export default UsersPage
