import { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export interface ILoginInfo {
  loginId: string
  password: string
}

export interface ILoginInfoError {
  loginId: string
  password: string
}

export default function LoginContainer() {
  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    loginId: '',
    password: '',
  })
  const [errors, setErrors] = useState<ILoginInfoError>({
    loginId: '',
    password: '',
  })
  const router = useRouter()

  const handleChangeLoginInfo = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setLoginInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleLogin = () => {
    if (!validateLoginForm()) {
      return
    }
    console.log('login info: ', loginInfo)
  }

  const goToRegister = () => {
    void router.push('/register')
  }

  const validateLoginForm = () => {
    if (!loginInfo.loginId) {
      setErrors((prev) => ({
        ...prev,
        loginId: 'Hãy nhập tên đăng nhập!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        loginId: '',
      }))
    }
    if (!loginInfo.password) {
      setErrors((prev) => ({
        ...prev,
        password: 'Hãy nhập mật khẩu!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        password: '',
      }))
    }
    return true
  }

  // useEffect(() => {
  //   if (!errors.loginId) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       loginId: 'Hãy nhập tên đăng nhập!',
  //     }))
  //   } else if (!errors.password) {
  //     setErrors((prev) => ({
  //       ...prev,
  //       password: 'Hãy nhập mật khẩu!',
  //     }))
  //   } else {
  //     setErrors({ loginId: '', password: '' })
  //   }
  // }, [loginInfo])

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
            Đăng nhập vào hệ thống
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="loginId" className="block text-sm font-medium leading-6 text-gray-900">
                Tên đăng nhập
              </label>
              <div className="mt-2">
                <input
                  id="loginId"
                  name="loginId"
                  value={loginInfo.loginId}
                  onChange={handleChangeLoginInfo}
                  // eslint-disable-next-line max-len
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.loginId && <p className="text-red-500">{errors.loginId}</p>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Mật khẩu
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Quên mật khẩu?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={loginInfo.password}
                  onChange={handleChangeLoginInfo}
                  autoComplete="current-password"
                  // eslint-disable-next-line max-len
                  className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}
              </div>
            </div>

            <div>
              <button
                onClick={handleLogin}
                // eslint-disable-next-line max-len
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Đăng nhập
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn chưa có tài khoản?{' '}
            <button onClick={goToRegister} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Đăng ký tài khoản
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
