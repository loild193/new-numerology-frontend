import React, { CSSProperties, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface Menu {
  iconUrl: string
  iconAlt: string
  name: string
  href: string
  isActive: boolean
}

interface Props {
  isCollapsed: boolean
}

const MENU: Menu[] = [
  {
    iconUrl: '/images/back.svg',
    iconAlt: 'Back',
    name: 'Getting started',
    href: '/getting-started',
    isActive: true,
  },
  {
    iconUrl: '/images/back.svg',
    iconAlt: 'Back',
    name: 'Profile',
    href: '/profile',
    isActive: false,
  },
  {
    iconUrl: '/images/back.svg',
    iconAlt: 'Back',
    name: 'Something',
    href: '/',
    isActive: false,
  },
]

const menuStyle: Record<string, CSSProperties> = {
  collapsed: {
    transform: 'translateX(-320px)',
    visibility: 'hidden',
  },
  notCollapsed: {
    transform: 'translateX(0)',
    visibility: 'visible',
  },
}

export const MobileSidebar: React.FC<Props> = React.memo(
  React.forwardRef(({ isCollapsed }, ref: React.ForwardedRef<HTMLDivElement>) => {
    const router = useRouter()
    const pathname = router.pathname
    const [menu, setMenu] = useState<Menu[]>(MENU)

    useEffect(() => {
      const newMenu = menu.map((item) => ({ ...item, isActive: item.href === pathname ? true : false }))
      setMenu(newMenu)
    }, [pathname])

    const onChooseMenu = (currentMenu: Menu) => {
      void router.push(currentMenu.href)
    }

    const onLoginOrLogout = () => {
      void router.push('/login')
    }

    console.log('isCollapsed', isCollapsed)

    return (
      <div
        className="fixed top-0 left-0 z-20 overflow-auto h-screen w-fit transition-all duration-[200ms] sm:hidden"
        ref={ref}
        style={isCollapsed ? menuStyle.collapsed : menuStyle.notCollapsed}
      >
        <div
          className="relative flex flex-col gap-y-20 justify-between
        bg-[#202020] px-4 py-3 h-full
        min-w-[320px] w-[320px] max-w-[320px] flex-[0_0_320px]"
        >
          <div className="px-2 py-1 flex justify-center">
            <img src="/images/my-logo.png" alt="Logo" className="aspect-auto w-[128px]" />
          </div>
          <ul className="flex-auto overflow-x-hidden overflow-y-auto">
            {menu.map((item) => (
              <li
                key={item.name}
                className={`flex justify-between items-center text-sm mb-2 rounded-md cursor-pointer transition duration-[300ms] ${
                  item.isActive ? 'bg-[#4a4646] text-[#ee9235]' : 'hover:bg-[#4a4646] hover:text-[#ee9235]'
                } px-2 py-3 group relative`}
                onClick={() => onChooseMenu(item)}
              >
                <div className="flex gap-x-4 items-center">
                  <img src={item.iconUrl} alt={item.iconAlt} className="w-5 h-5" />
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap">{item.name}</p>
                </div>
                {isCollapsed ? (
                  <p
                    className="invisible fixed mt-9 ml-9 group-hover:visible text-white transition px-3 py-3 bg-black rounded-sm
                                z-100"
                  >
                    {item.name}
                  </p>
                ) : null}
                {item.isActive && !isCollapsed ? (
                  <img src="/images/back.svg" alt="Back" className="w-4 h-4 rotate-180" />
                ) : null}
              </li>
            ))}
          </ul>
          <div className={`absolute bottom-0 right-0 w-full overflow-x-hidden overflow-y-auto px-4 py-3`}>
            <button
              type="button"
              className="flex gap-x-4 justify-center items-center w-full
                rounded-md bg-[#ee9235] px-2 py-3 transition hover:opacity-70"
              onClick={onLoginOrLogout}
            >
              <img src="/images/sign_out.svg" alt="Login" className="w-5 h-5" />
              {!isCollapsed ? <p className="overflow-hidden text-ellipsis whitespace-nowrap">Login</p> : null}
            </button>
          </div>
        </div>
      </div>
    )
  }),
)
