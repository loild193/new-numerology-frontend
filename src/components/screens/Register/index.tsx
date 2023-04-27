import { ChangeEvent, useState } from 'react'
import Link from 'next/link'
import { useMutation } from '@tanstack/react-query'
import { Input } from '@components/common/Authentication/Input'
import { TopForm } from '@components/common/Authentication/TopForm'
import { Button } from '@components/common/Button'
import { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING } from '@models/api/authentication/register'
import { register } from '@utils/api/authentication/register'
import { isEmail } from '@utils/validate'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'

export interface IRegisterInfo {
  username: string
  email: string
  phoneNumber: string
}

export interface ILoginInfoError {
  username: string
  email: string
  phoneNumber: string
}

export default function RegisterContainer() {
  const [registerInfo, setRegisterInfo] = useState<IRegisterInfo>({
    username: '',
    email: '',
    phoneNumber: '',
  })
  const [errors, setErrors] = useState<IRegisterInfo>({
    username: '',
    email: '',
    phoneNumber: '',
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      if (data.success && data.response?.id) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Đăng ký tài khoản thành công. Vui lòng chờ liên hệ từ admin.')
      } else {
        logger.error('[register]', data.error)
        notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get(data.error?.message ?? '') ?? DEFAULT_ERROR_MESSAGE)
      }
    },
    onError: (error: any) => {
      logger.error('[register]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

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
    mutate({ ...registerInfo })
  }

  const validateRegisterForm = () => {
    const { username, email, phoneNumber } = registerInfo

    if (!username) {
      setErrors((prev) => ({
        ...prev,
        username: 'Hãy nhập họ và tên!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        username: '',
      }))
    }

    if (!email) {
      setErrors((prev) => ({
        ...prev,
        email: 'Hãy nhập email!',
      }))
      return false
    } else if (!isEmail(email)) {
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

    if (!phoneNumber) {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: 'Hãy nhập số điện thoại!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        phoneNumber: '',
      }))
    }

    return true
  }

  const { email, phoneNumber, username } = registerInfo
  const isButtonDisabled =
    isLoading || !!errors.email || !!errors.phoneNumber || !!errors.username || !email || !phoneNumber || !username

  return (
    <div className="flex justify-center w-[450px] md:border md:rounded-lg">
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-16 lg:px-8">
        <TopForm label="Đăng ký thông tin" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            <Input
              name="username"
              label="Họ và tên"
              value={username}
              errorMessage={errors.username}
              onChange={handleChangeRegisterInfo}
            />
            <Input
              name="email"
              label="Email"
              value={email}
              errorMessage={errors.email}
              onChange={handleChangeRegisterInfo}
            />
            <Input
              name="phoneNumber"
              label="Số điện thoại"
              value={phoneNumber}
              errorMessage={errors.phoneNumber}
              onChange={handleChangeRegisterInfo}
            />

            <Button
              label="Gửi thông tin"
              loading={isLoading}
              loadingLabel="Đang gửi"
              disabled={isButtonDisabled}
              onClick={handleRegister}
            />
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Bạn đã có tài khoản?{' '}
            <Link href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Đăng nhập
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
