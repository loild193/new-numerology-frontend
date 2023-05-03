import { GetServerSideProps } from 'next'
import { getCookie } from 'cookies-next'
import AdminLayout from '@components/layouts/AdminLayout'
import { ROLE } from '@models/api/authentication/login'
import { COOKIES_KEY } from '@models/keys'
import { AccountInfo } from '@src/zustand/accountInfo'
import { STATUS_ACCESS_TOKEN, checkAccessToken } from '@utils/accessToken'
import { safeParseJSON } from '@utils/json'
import Title from '@components/common/Title'

const AdminPage = () => {
  return (
    <AdminLayout>
      <Title title="Trang chủ admin" />
      <div className="flex justify-center mt-2 ">Trang chủ admin</div>
    </AdminLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
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
        props: {},
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

export default AdminPage
