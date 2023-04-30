import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { setCookie } from 'cookies-next'
import { Input } from '@components/common/Authentication/Input'
import { PasswordInput } from '@components/common/Authentication/PasswordInput'
import { TopForm } from '@components/common/Authentication/TopForm'
import { Button } from '@components/common/Button'
import { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING, ROLE } from '@models/api/authentication/login'
import { COOKIES_KEY } from '@models/keys'
import { useBoundStore } from '@src/zustand'
import { AccountInfo } from '@src/zustand/accountInfo'
import { login } from '@utils/api/authentication/login'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'

export interface ILoginInfo {
  userId: string
  password: string
}

export interface ILoginInfoError {
  userId: string
  password: string
}

export default function LoginContainer() {
  const router = useRouter()
  const { saveAccountInfo } = useBoundStore((store) => ({ saveAccountInfo: store.saveAccountInfo }))

  const [loginInfo, setLoginInfo] = useState<ILoginInfo>({
    userId: '',
    password: '',
  })
  const [errors, setErrors] = useState<ILoginInfoError>({
    userId: '',
    password: '',
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      if (data.success && data.response?.accessToken && data.response?.userId) {
        const { userId, username, email, role, accessToken } = data.response

        const accountInfo: AccountInfo = { userId, username, email, accessToken }
        saveAccountInfo(accountInfo)
        setCookie(COOKIES_KEY.ACCOUNT_INFO, accountInfo)

        notify(NOTIFICATION_TYPE.SUCCESS, 'Đăng nhập thành công.')
        setTimeout(() => {
          if (role === ROLE.ADMIN) {
            void router.push('/admin/users')
          } else {
            void router.push('/')
          }
        }, 2000)
      } else {
        logger.error('[login]', data.error)
        notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get(data.error?.message ?? '') ?? DEFAULT_ERROR_MESSAGE)
      }
    },
    onError: (error: any) => {
      logger.error('[login]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

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
    mutate({ ...loginInfo })
  }

  const validateLoginForm = () => {
    if (!loginInfo.userId) {
      setErrors((prev) => ({
        ...prev,
        userId: 'Hãy nhập tên đăng nhập!',
      }))

      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        userId: '',
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

  const { userId, password } = loginInfo
  const isButtonDisabled = isLoading || !!errors.userId || !!errors.password || !userId || !password

  return (
    <div className="flex justify-center w-[450px] md:border md:rounded-lg">
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-16 lg:px-8">
        <TopForm label="Đăng nhập vào hệ thống" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <Input
              label="Tên đăng nhập"
              name="userId"
              value={userId}
              errorMessage={errors.userId}
              onChange={handleChangeLoginInfo}
            />

            <PasswordInput
              label="Mật khẩu"
              name="password"
              value={password}
              errorMessage={errors.password}
              onChange={handleChangeLoginInfo}
            />

            <Button
              label="Đăng nhập"
              loading={isLoading}
              loadingLabel="Đang xử lý"
              disabled={isButtonDisabled}
              onClick={handleLogin}
            />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn chưa có tài khoản?{' '}
            <Link href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Đăng ký tài khoản
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
