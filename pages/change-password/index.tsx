import MainLayout from '@components/layouts/MainLayout'
import { ChangePasswordContainer } from '@components/screens/ChangePassword'

const ChangePasswordPage = () => {
  return (
    <MainLayout title="Thay đổi mật khẩu">
      <div className="flex justify-center mt-16 mb-12">
        <ChangePasswordContainer />
      </div>
    </MainLayout>
  )
}

export default ChangePasswordPage
