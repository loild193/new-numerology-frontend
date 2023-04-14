import { useEffect } from 'react'
import { NextPageContext } from 'next'
import { useRouter } from 'next/router'

const HomePage = () => {
  const router = useRouter()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      void router.push('/getting-started')
    }
  }, [])

  return null
}

HomePage.getInitialProps = (ctx: NextPageContext) => {
  if (ctx.res) {
    ctx.res.writeHead(302, { Location: '/getting-started' })
    ctx.res.end()
  }
  return {}
}

export default HomePage
