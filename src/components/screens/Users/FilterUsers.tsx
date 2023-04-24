import { ChangeEvent } from 'react'
import { Button } from 'flowbite-react'

export interface IUsersProps {
  loginId?: string
  fullname?: string
  email?: string
  status?: number | string
}

export interface IUsersFilterProps {
  usersFilter: IUsersProps
  handleChangeValue: (usersFilter: IUsersProps) => void
}

export default function UsersFilter({ usersFilter, handleChangeValue }: IUsersFilterProps) {
  const onHandleResetFilter = () => {
    handleChangeValue({
      loginId: '',
      fullname: '',
      email: '',
      status: '',
    })
  }

  const handleChangeFilter = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    handleChangeValue((prev) => ({
      ...prev,
      [e.target.name]: [e.target.value],
    }))
  }
  return (
    <div className="mb-8 bg-slate-100 rounded-lg px-4 py-4">
      <div>Tìm kiếm</div>
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <label htmlFor="loginId" className="block text-sm font-medium leading-6 text-gray-900">
            Tên đăng nhập
          </label>
          <div className="mt-2">
            <input
              id="loginId"
              name="loginId"
              value={usersFilter.loginId}
              onChange={handleChangeFilter}
              // eslint-disable-next-line max-len
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        <div>
          <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
            Họ và tên
          </label>
          <div className="mt-2">
            <input
              id="fullname"
              name="fullname"
              value={usersFilter.fullname}
              onChange={handleChangeFilter}
              // eslint-disable-next-line max-len
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              value={usersFilter.email}
              onChange={handleChangeFilter}
              // eslint-disable-next-line max-len
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
            Trạng thái
          </label>
          <div className="mt-2">
            <select
              id="status"
              name="status"
              value={usersFilter.status}
              onChange={handleChangeFilter}
              placeholder="Chọn trạng thái"
              // eslint-disable-next-line max-len
              className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            >
              <option disabled selected value="">
                Chọn trạng thái
              </option>
              <option value="1">Hoạt động</option>
              <option value="2">Đang chờ duyệt</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap  justify-end gap-2">
        <div>
          <Button color="gray" onClick={onHandleResetFilter}>
            Đặt lại
          </Button>
        </div>
        <div>
          <Button>Tìm kiếm</Button>
        </div>
      </div>
    </div>
  )
}
