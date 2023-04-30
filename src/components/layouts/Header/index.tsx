import React from 'react'
import Link from 'next/link'
import Avvvatars from 'avvvatars-react'
import { Navbar, Dropdown } from 'flowbite-react'
import { useLogOut } from '@hooks/useLogOut'
import { useBoundStore } from '@src/zustand'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'

export const Header = () => {
  const { accountInfo } = useBoundStore((store) => ({ accountInfo: store.accountInfo }))
  const { logOut } = useLogOut()

  const onLogOut = () => {
    logOut()
    notify(NOTIFICATION_TYPE.SUCCESS, 'Đăng xuất thành công')
  }

  return (
    <Navbar fluid={true} rounded={true} className="border-b">
      <Navbar.Brand href="/">
        <img
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          className="mr-3 h-6 sm:h-9"
          alt="Flowbite Logo"
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Kaido</span>
      </Navbar.Brand>
      {accountInfo.accessToken ? (
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline={true}
            label={<Avvvatars value={accountInfo.username} style="character" size={48} />}
          >
            <Dropdown.Header>
              <span className="block text-sm">{accountInfo.username}</span>
              <span className="block truncate text-sm font-medium">{accountInfo.email}</span>
            </Dropdown.Header>
            <Dropdown.Item>
              <Link href="/change-password">Đổi mật khẩu</Link>
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item onClick={onLogOut}>Đăng xuất</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      ) : null}
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Trang chủ
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default React.memo(Header)
