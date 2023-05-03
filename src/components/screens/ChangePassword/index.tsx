import { ChangeEvent, useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { Input } from '@components/common/Authentication/Input'
import { PasswordInput } from '@components/common/Authentication/PasswordInput'
import { TopForm } from '@components/common/Authentication/TopForm'
import { Button } from '@components/common/Button'
import { DEFAULT_ERROR_MESSAGE, ERROR_MAPPING } from '@models/api/authentication/register'
import { ServerResponse } from '@models/api/authentication/changePassword'
import { useLogOut } from '@hooks/useLogOut'
import { useBoundStore } from '@src/zustand'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'
import { ErrorFromNextApi } from '@models/api'

export interface ChangePasswordForm {
  userId: string
  username: string
  email: string
  newPassword: string
  confirmPassword: string
}

export interface IChangePasswordFormError {
  newPassword: string
  confirmPassword: string
}

const changePassword = async (input: { userId: string; email: string; newPassword: string }) => {
  try {
    const response = await fetch('/api/user/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
      credentials: 'same-origin',
    })
    const rawResponse = (await response.json()) as ServerResponse | ErrorFromNextApi

    return rawResponse
  } catch (error) {
    logger.error('[fetchUser]', error)
  }
}

export function ChangePasswordContainer() {
  const { accountInfo } = useBoundStore((store) => ({ accountInfo: store.accountInfo }))
  const { logOut } = useLogOut()

  const [changePasswordForm, setChangePasswordForm] = useState<ChangePasswordForm>({
    userId: accountInfo.userId,
    username: accountInfo.username,
    email: accountInfo.email,
    newPassword: '',
    confirmPassword: '',
  })
  const [errors, setErrors] = useState<IChangePasswordFormError>({
    newPassword: '',
    confirmPassword: '',
  })

  const { mutate, isLoading } = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      if (data?.success && data?.response?.userId) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Đổi mật khẩu thành công')
        logOut()
      } else {
        logger.error('[changePassword]', (data as ErrorFromNextApi)?.message)
        notify(
          NOTIFICATION_TYPE.ERROR,
          ERROR_MAPPING.get((data as ErrorFromNextApi)?.message ?? '') ?? DEFAULT_ERROR_MESSAGE,
        )
      }
    },
    onError: (error: any) => {
      logger.error('[changePassword]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

  useEffect(() => {
    if (accountInfo) {
      setChangePasswordForm((prev) => ({
        ...prev,
        userId: accountInfo.userId,
        username: accountInfo.username,
        email: accountInfo.email,
      }))
    }
  }, [accountInfo])

  const onChangePasswordForm = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setChangePasswordForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const onChangePassword = () => {
    if (!validateChangePasswordForm()) {
      return
    }
    mutate({ ...changePasswordForm })
  }

  const validateChangePasswordForm = () => {
    const { newPassword, confirmPassword } = changePasswordForm

    if (!newPassword) {
      setErrors((prev) => ({
        ...prev,
        newPassword: 'Hãy nhập mật khẩu',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        newPassword: '',
      }))
    }

    if (!confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: 'Hãy nhập mật khẩu xác nhận!',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: '',
      }))
    }

    if (confirmPassword !== newPassword) {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: 'Mật khẩu xác nhận không giống mật khẩu mới',
      }))
      return false
    } else {
      setErrors((prev) => ({
        ...prev,
        confirmPassword: '',
      }))
    }

    return true
  }

  const { userId, username, email } = accountInfo
  const { newPassword, confirmPassword } = changePasswordForm
  const isButtonDisabled =
    isLoading || !!errors.newPassword || !!errors.confirmPassword || !newPassword || !confirmPassword

  return (
    <div className="flex justify-center w-[450px] md:border md:rounded-lg">
      <div className="flex min-h-full flex-1 flex-col justify-center px-12 py-16 lg:px-8 shadow-lg">
        <TopForm label="Thay đổi mật khẩu" />

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-4">
            <Input name="userId" label="Tên đăng nhập" value={userId} disabled={true} onChange={onChangePasswordForm} />
            <Input name="username" label="Họ và tên" value={username} disabled={true} onChange={onChangePasswordForm} />
            <Input name="email" label="Email" value={email} disabled={true} onChange={onChangePasswordForm} />
            <PasswordInput
              name="newPassword"
              label="Mật khẩu mới"
              value={newPassword}
              onChange={onChangePasswordForm}
            />
            <PasswordInput
              name="confirmPassword"
              label="Xác nhận mật khẩu"
              value={confirmPassword}
              onChange={onChangePasswordForm}
            />

            <Button
              label="Đổi mật khẩu"
              loading={isLoading}
              loadingLabel="Đang xử lý"
              disabled={isButtonDisabled}
              onClick={onChangePassword}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
