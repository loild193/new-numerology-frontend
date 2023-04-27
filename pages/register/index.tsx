import MainLayout from '@components/layouts/MainLayout'
import RegisterContainer from '@components/screens/Register'

const RegisterPage = () => {
  return (
    <MainLayout title="Register new account">
      <div className="flex justify-center mt-16 mb-12">
        <RegisterContainer />
      </div>
    </MainLayout>
  )
}

export default RegisterPage
