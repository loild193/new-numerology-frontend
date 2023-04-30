import MainLayout from '@components/layouts/MainLayout'
import LoginContainer from '@components/screens/Login'

const LoginPage = () => {
  return (
    <MainLayout title="Đăng nhập">
      <div className="flex justify-center mt-16 mb-12">
        <LoginContainer />
      </div>
    </MainLayout>
  )
}

export default LoginPage
