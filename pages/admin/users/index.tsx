import { useState } from 'react'
import { Table, Pagination as Pagi } from 'flowbite-react'
import AdminLayout from '@components/layouts/AdminLayout'
import Title from '@components/common/Title'
import { EditIcon } from '@components/common/Icon'
import UsersFilter, { IUsersProps } from '@components/screens/Users/FilterUsers'

export interface IUsers {
  id: number
  fullname: string
  email: string
  numberPhone: string
  loginId: string
  numberOfSearch: number
}

const mockUsers: Array<IUsers> = [
  {
    id: 5,
    fullname: 'Khánh Nguyễn',
    email: 'khanhnv1@kaido.vn',
    numberPhone: '099889900',
    loginId: '123456',
    numberOfSearch: 1000,
  },
  {
    id: 7,
    fullname: 'Lợi Lê',
    email: 'loild@kaido.vn',
    numberPhone: '099889901',
    loginId: '123123',
    numberOfSearch: 145,
  },
  {
    id: 9,
    fullname: 'Sushi Phấn Đào',
    email: 'sushi@kaido.vn',
    numberPhone: '099889902',
    loginId: '123123',
    numberOfSearch: 543,
  },
]

const defaultFilter: IUsersProps = {
  fullname: '',
  email: '',
}

const UsersPage = () => {
  const [users] = useState<Array<IUsers>>(mockUsers)
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
                <Table.Cell>{user.loginId}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.numberPhone}</Table.Cell>
                <Table.Cell>
                  <span className="font-medium text-blue-600 cursor-pointer dark:text-blue-500">
                    <EditIcon width="24px" height="24px" />
                  </span>
                </Table.Cell>
              </Table.Row>
            ))}
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
