import { useRouter } from 'next/router'

export default function useChangeRoute() {
  const router = useRouter()
  const { pathname } = router

  const changeRoute = (routeQuery: Record<any, any>) => {
    void router.replace(
      {
        pathname,
        query: {
          ...router.query,
          ...routeQuery,
        },
      },
      undefined,
      { scroll: false, shallow: true },
    )
  }

  const removeQueryParams = () => {
    void router.replace(
      {
        pathname,
      },
      undefined,
      { scroll: false, shallow: true },
    )
  }

  return { changeRoute, removeQueryParams }
}
