import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'

export interface IRegisterInfo {
  fullname: string
  email: string
  numberphone: string
}

export interface ILoginInfoError {
  fullname: string
  email: string
  numberphone: string
}

export default function RegisterContainer() {
  const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
    fullname: '',
    email: '',
    numberphone: '',
  })
  const [errors, setErrors] = useState<IRegisterInfo>({
    fullname: '',
    email: '',
    numberphone: '',
  })
  const router = useRouter()

  const handleChangeRegisterInfo = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setRegisterInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleRegister = () => {
    if (!validateRegisterForm()) {
      return
    }
    console.log('register info: ', registerInfo)
  }

  const goToLoginPage = () => {
    void router.push('/login')
  }

  const validateRegisterForm = () => {
    if (!registerInfo.fullname) {
      setErrors((prev) => ({
        ...prev,
        fullname: 'Hãy nhập họ và tên!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        fullname: '',
      }))
    }
    if (!registerInfo.email) {
      setErrors((prev) => ({
        ...prev,
        email: 'Hãy nhập email!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        email: '',
      }))
    }
    if (!registerInfo.numberphone) {
      setErrors((prev) => ({
        ...prev,
        numberphone: 'Hãy nhập số điện thoại!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        numberphone: '',
      }))
    }
    return true
  }

  return (
    <div className="flex justify-center w-[450px] md:border md:rounded-lg">
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-16 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Đăng ký thông tin
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            <div>
              <label htmlFor="fullname" className="block text-sm font-medium leading-6 text-gray-900">
                Họ và tên
              </label>
              <div className="mt-2">
                <input
                  id="fullname"
                  name="fullname"
                  value={registerInfo.fullname}
                  onChange={handleChangeRegisterInfo}
                  // eslint-disable-next-line max-len
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.fullname && <p className="text-red-500">{errors.fullname}</p>}
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
                  type="email"
                  value={registerInfo.email}
                  onChange={handleChangeRegisterInfo}
                  // eslint-disable-next-line max-len
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="numberphone" className="block text-sm font-medium leading-6 text-gray-900">
                Số điện thoại
              </label>
              <div className="mt-2">
                <input
                  id="numberphone"
                  name="numberphone"
                  type="tel"
                  value={registerInfo.numberphone}
                  onChange={handleChangeRegisterInfo}
                  // eslint-disable-next-line max-len
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.numberphone && <p className="text-red-500">{errors.numberphone}</p>}
              </div>
            </div>

            <div>
              <button
                onClick={handleRegister}
                // eslint-disable-next-line max-len
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Gửi thông tin
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn đã có tài khoản?{' '}
            <button onClick={goToLoginPage} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
