import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { getCookie } from 'cookies-next'
import AdminLayout from '@components/layouts/AdminLayout'
import Title from '@components/common/Title'
import { ListSearchNumerology } from '@components/screens/Admin/ListSearchNumerology'
import { DEFAULT_ITEM_PER_PAGE, DEFAULT_START_PAGE } from '@models/api/admin/getSearchNumerologies'
import { ROLE } from '@models/api/authentication/login'
import { COOKIES_KEY } from '@models/keys'
import { AccountInfo } from '@src/zustand/accountInfo'
import { STATUS_ACCESS_TOKEN, checkAccessToken } from '@utils/accessToken'
import { safeParseJSON } from '@utils/json'

type QueryParams = { page: string; startPage: string; limit: string }

const ListSearchNumerologyPage = ({
  page,
  startPage,
  limit,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <AdminLayout>
      <Title title="Danh sách tra cứu" />
      <ListSearchNumerology page={page} startPage={startPage} limit={limit} />
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

export default ListSearchNumerologyPage
