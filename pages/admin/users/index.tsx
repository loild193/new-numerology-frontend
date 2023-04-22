import { Table, Pagination as Pagi } from 'flowbite-react'
import AdminLayout from '@components/layouts/AdminLayout'
import Title from '@components/common/Title'
import { useState } from 'react'
import { EditIcon } from '@components/common/Icon'
import UsersFilter, { IUsersProps } from '@components/screens/Users/FilterUsers'

export interface IUsers {
  id: number
  fullname: string
  email: string
  numberphone: string
  login_id: string
  numberOfSearch: number
}

const mockUsers: Array<IUsers> = [
  {
    id: 5,
    fullname: 'Khánh Nguyễn',
    email: 'khanhnv1@kaido.vn',
    numberphone: '099889900',
    login_id: '123456',
    numberOfSearch: 1000,
  },
  {
    id: 7,
    fullname: 'Lợi Lê',
    email: 'loild@kaido.vn',
    numberphone: '099889901',
    login_id: '123123',
    numberOfSearch: 145,
  },
  {
    id: 9,
    fullname: 'Sushi Phấn Đào',
    email: 'sushi@kaido.vn',
    numberphone: '099889902',
    login_id: '123123',
    numberOfSearch: 543,
  },
]

const defaultFilter: IUsersProps = {
  fullname: '',
  email: '',
}

const UsersPage = () => {
  const [users, setUsers] = useState<Array<IUsers>>(mockUsers)
  const [usersFilter, setUsersFilter] = useState<IUsersProps>(defaultFilter)

  const handleChangePage = () => {
    console.log('change page')
  }
  return (
    <AdminLayout>
      <Title title="Quản lý người dùng" />
      <UsersFilter usersFilter={usersFilter} handleChangeValue={setUsersFilter} />
      <Table>
        <Table.Head>
          <Table.HeadCell>#</Table.HeadCell>
          <Table.HeadCell>ID</Table.HeadCell>
          <Table.HeadCell>Họ và tên</Table.HeadCell>
          <Table.HeadCell>Tên đăng nhập</Table.HeadCell>
          <Table.HeadCell>Email</Table.HeadCell>
          <Table.HeadCell>Numberphone</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {users?.length > 0 &&
            users.map((user, index) => (
              <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800" key={index}>
                <Table.Cell>{index + 1}</Table.Cell>
                <Table.Cell>{user.id}</Table.Cell>
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {user.fullname}
                </Table.Cell>
                <Table.Cell>{user.login_id}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.numberphone}</Table.Cell>
                <Table.Cell>
                  <span className="font-medium text-blue-600 cursor-pointer dark:text-blue-500">
                    <EditIcon width="24px" height="24px" />
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}

          {/* <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Microsoft Surface Pro
            </Table.Cell>
            <Table.Cell>White</Table.Cell>
            <Table.Cell>Laptop PC</Table.Cell>
            <Table.Cell>$1999</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Magic Mouse 2
            </Table.Cell>
            <Table.Cell>Black</Table.Cell>
            <Table.Cell>Accessories</Table.Cell>
            <Table.Cell>$99</Table.Cell>
            <Table.Cell>
              <a href="/tables" className="font-medium text-blue-600 hover:underline dark:text-blue-500">
                Edit
              </a>
            </Table.Cell>
          </Table.Row> */}
        </Table.Body>
      </Table>
      <div className="flex items-center justify-center text-center mt-8">
        <Pagi
          currentPage={1}
          layout="pagination"
          onPageChange={handleChangePage}
          showIcons={true}
          totalPages={1000}
          previousLabel="Trước"
          nextLabel="Sau"
        />
      </div>
    </AdminLayout>
  )
}

export default UsersPage
