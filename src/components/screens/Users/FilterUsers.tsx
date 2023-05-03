import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { Button } from 'flowbite-react'
import { Input } from '@components/common/Authentication/Input'
import { LIST_USER_FILTER } from '@models/api/admin/getUsers'
import useChangeRoute from '@hooks/useChangeRoute'
import Link from 'next/link'

export interface IUsersProps {
  keyword: string
  filter: LIST_USER_FILTER
}

export interface IUsersFilterProps {
  usersFilter: IUsersProps
  handleChangeValue: Dispatch<SetStateAction<IUsersProps>>
}

export default function UsersFilter({ usersFilter, handleChangeValue }: IUsersFilterProps) {
  const { changeRoute, removeQueryParams } = useChangeRoute()

  const onHandleResetFilter = () => {
    const value = {
      keyword: '',
      filter: LIST_USER_FILTER.ALL,
    }
    handleChangeValue(value)
    removeQueryParams()
  }

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const value = { [e.target.name]: e.target.value }
    handleChangeValue((prev) => ({
      ...prev,
      ...value,
    }))

    changeRoute(value)
  }

  return (
    <div className="mb-8 bg-slate-100 rounded-lg px-4 py-4">
      <div>Tìm kiếm</div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <Input
          label="Nhập họ và tên/email/số điện thoại"
          name="keyword"
          placeholder="Nhập họ và tên, email, số điện thoại"
          value={usersFilter.keyword}
          onChange={handleChangeFilter}
        />
        <div>
          <label htmlFor="filter" className="block text-sm font-medium leading-6 text-gray-900">
            Trạng thái
          </label>
          <div className="mt-2">
            <select
              id="filter"
              name="filter"
              // eslint-disable-next-line max-len
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Chọn trạng thái"
              value={usersFilter.filter}
              onChange={handleChangeFilter}
            >
              <option value={LIST_USER_FILTER.ALL}>Tất cả</option>
              <option value={LIST_USER_FILTER.HAS_ACCOUNT}>Đã có tài khoản</option>
              <option value={LIST_USER_FILTER.NOT_HAVE_ACCOUNT}>Chưa có tài khoản</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-end gap-2">
        <Button color="gray" onClick={onHandleResetFilter}>
          Đặt lại
        </Button>
        <Button color="success">
          <Link href={'/admin/users/create'}>Thêm mới</Link>
        </Button>
      </div>
    </div>
  )
}
