import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

interface Menu {
  iconUrl: string
  iconAlt: string
  name: string
  href: string
  isActive: boolean
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

const menuStyle = {
  collapsed: {
    minWidth: '72px',
    maxWidth: '72px',
    width: '72px',
    flex: '0 0 72px',
  },
  notCollapsed: {
    minWidth: '320px',
    maxWidth: '320px',
    width: '320px',
    flex: '0 0 320px',
  },
}

export const Sidebar = React.memo(() => {
  const router = useRouter()
  const pathname = router.pathname
  const [menu, setMenu] = useState<Menu[]>(MENU)
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    const newMenu = menu.map((item) => ({ ...item, isActive: item.href === pathname ? true : false }))
    setMenu(newMenu)
  }, [pathname])

  const onChooseMenu = (currentMenu: Menu) => {
    void router.push(currentMenu.href)
  }

  const onCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  const onLoginOrLogout = () => {
    void router.push('/login')
  }

  return (
    <div
      className="relative flex flex-col gap-y-20 justify-between
      bg-[#202020] px-4 py-3 transition-all duration-[200ms] h-full max-sm:hidden"
      style={isCollapsed ? menuStyle.collapsed : menuStyle.notCollapsed}
    >
      <div className="px-2 py-1 flex justify-center">
        <img src="/images/my-logo.png" alt="Logo" className="aspect-auto w-[128px]" />
      </div>
      <button
        type="button"
        className="cursor-pointer absolute -right-2 top-16 bg-white rounded-full p-1"
        onClick={onCollapsed}
      >
        <img src="/images/back.svg" alt="Login" className={`w-3 h-3 ${isCollapsed ? 'rotate-180' : ''}`} />
      </button>
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
  )
})
