import React from 'react'
import { Navbar, Dropdown, Avatar } from 'flowbite-react'

export const Header = () => {
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
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline={true}
          label={
            <Avatar
              alt="User settings"
              img="https://bumcheo.com/wp-content/uploads/2022/09/doi-thu-doflamingo.jpg"
              rounded={true}
            />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Khánh Nguyễn</span>
            <span className="block truncate text-sm font-medium">khanh@kaido.vn</span>
          </Dropdown.Header>
          <Dropdown.Item>Trang chủ</Dropdown.Item>
          <Dropdown.Item>Trang cá nhân</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Đăng xuất</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" active={true}>
          Trang chủ
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default React.memo(Header)
