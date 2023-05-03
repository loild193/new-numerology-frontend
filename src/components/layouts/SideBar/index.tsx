import Avvvatars from 'avvvatars-react'
import { Sidebar } from 'flowbite-react'
import { ChartPieIcon, UsersIcon, ArrowSmallLeftIcon, SearchIcon } from '@components/common/Icon'
import { useLogOut } from '@hooks/useLogOut'
import { useBoundStore } from '@src/zustand'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'

export const SideBarAdmin = () => {
  const { accountInfo } = useBoundStore((store) => ({
    accountInfo: store.accountInfo,
    removeAccountInfo: store.removeAccountInfo,
  }))
  const { logOut } = useLogOut()

  const onLogOut = () => {
    logOut()
    notify(NOTIFICATION_TYPE.SUCCESS, 'Đăng xuất thành công')
  }

  return (
    <div className="w-44 fixed top-0 h-screen">
      <Sidebar aria-label="Admin sidebar">
        <div className="h-full border-r px-2">
          <div className="flex flex-col items-center py-10">
            <Avvvatars value={accountInfo.username} style="character" size={64} />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{accountInfo.username}</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">{accountInfo.email}</span>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/admin" icon={ChartPieIcon}>
                Trang chủ quản lý
              </Sidebar.Item>
              <Sidebar.Item href="/" icon={SearchIcon}>
                Trang tra cứu chỉ số
              </Sidebar.Item>
              <Sidebar.Item href="/admin/users" icon={UsersIcon}>
                Quản lý người dùng
              </Sidebar.Item>
              <Sidebar.Item icon={ArrowSmallLeftIcon}>
                <button type="button" onClick={onLogOut}>
                  Đăng xuất
                </button>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </div>
  )
}
