import { Sidebar } from 'flowbite-react'
import { ChartPieIcon, UsersIcon, ArrowSmallLeftIcon } from '@components/common/Icon'

export const SideBarAdmin = () => {
  return (
    <div className="w-fit">
      <Sidebar aria-label="Default sidebar example">
        <div className="h-full border-r px-2">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 h-24 w-24 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">Khanh Nguyen</h5>
            <span className="text-sm text-gray-500 dark:text-gray-400">khanhnv1@kaido.vn</span>
          </div>
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={ChartPieIcon}>
                Dashboard
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={UsersIcon}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={ArrowSmallLeftIcon}>
                Back Home
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </div>
      </Sidebar>
    </div>
  )
}
