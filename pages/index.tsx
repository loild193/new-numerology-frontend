import { GetServerSideProps } from 'next'
import { getCookie } from 'cookies-next'
import MainLayout from '@components/layouts/MainLayout'
import { Main } from '@components/screens/Main'
import { ROLE } from '@models/api/authentication/login'
import { COOKIES_KEY } from '@models/keys'
import { AccountInfo } from '@src/zustand/accountInfo'
import { STATUS_ACCESS_TOKEN, checkAccessToken } from '@utils/accessToken'
import { safeParseJSON } from '@utils/json'

const HomePage = () => {
  return (
    <MainLayout title="Tra cứu thần số học">
      <Main />
    </MainLayout>
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
      (checkAccessTokenResult.status === STATUS_ACCESS_TOKEN.UNEXPIRED &&
        checkAccessTokenResult.data?.role === ROLE.USER) ||
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

export default HomePage
