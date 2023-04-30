import MainLayout from '@components/layouts/MainLayout'
import RegisterContainer from '@components/screens/Register'

const RegisterPage = () => {
  return (
    <MainLayout title="Đăng ký tài khoản mới">
      <div className="flex justify-center mt-16 mb-12">
        <RegisterContainer />
      </div>
    </MainLayout>
  )
}

export default RegisterPage
