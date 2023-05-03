import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'
import { Button as OutlineButton } from 'flowbite-react'
import { Input } from '@components/common/Authentication/Input'
import { Button } from '@components/common/Button'
import {
  DEFAULT_ERROR_MESSAGE,
  ERROR_MAPPING,
  ServerResponse as CreateUserServerResponse,
} from '@models/api/admin/createUser'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'
import { PasswordInput } from '@components/common/Authentication/PasswordInput'

type UserForm = {
  username: string
  email: string
  phone: string
  userId: string
  password: string
  searchAmountLeft: number
}

const createUser = async (input: { userId: string; password: string; searchAmountLeft?: number }) => {
  try {
    const response = await fetch('/api/admin/create-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
      credentials: 'same-origin',
    })
    const rawResponse = (await response.json()) as CreateUserServerResponse

    return rawResponse
  } catch (error) {
    logger.error('[fetchUser]', error)
  }
}

export const UserCreate = () => {
  const router = useRouter()

  const [userForm, setUserForm] = useState<UserForm>({
    username: '',
    email: '',
    phone: '',
    userId: '',
    password: '',
    searchAmountLeft: 0,
  })

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: createUser,
    onSuccess: (data) => {
      if (data && data.success && data.response.userId) {
        notify(NOTIFICATION_TYPE.SUCCESS, 'Thêm tài khoản thành công')
        setTimeout(() => {
          void router.push('/admin/users')
        }, 2000)
      }
    },
    onError: (error: any) => {
      logger.error('[createUser]', error)
      notify(NOTIFICATION_TYPE.ERROR, ERROR_MAPPING.get((error?.message as string) ?? '') ?? DEFAULT_ERROR_MESSAGE)
    },
  })

  const onBack = () => {
    router.back()
  }

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    if (name === 'searchAmountLeft') {
      setUserForm((prev) => ({ ...prev, [name]: Number(value) }))
    } else {
      setUserForm((prev) => ({ ...prev, [name]: value }))
    }
  }

  const onCreateUser = () => {
    mutate({ userId: userId ?? '', password, searchAmountLeft })
  }

  const { username, email, phone, userId, password, searchAmountLeft } = userForm
  const isButtonDisabled = isUpdating || !userId || !password || !searchAmountLeft

  return (
    <div className="pb-8">
      <div className="flex gap-x-4 items-center">
        <OutlineButton outline={true} onClick={onBack}>
          Quay lại
        </OutlineButton>
      </div>
      <div className="mt-6 mb-8 flex flex-col gap-y-4">
        <div className="grid grid-cols-3 gap-x-6">
          <Input label="Họ và tên" name="username" value={username} onChange={onChangeInput} />
          <Input label="Email" name="email" value={email} onChange={onChangeInput} />
          <Input label="Số điện thoại" name="phone" value={phone} onChange={onChangeInput} />
        </div>
        <Input label="Tên đăng nhập" name="userId" value={userId ?? ''} onChange={onChangeInput} />
        <PasswordInput label="Mật khẩu" name="password" value={password} onChange={onChangeInput} />
        <Input
          label="Số lần tra cứu"
          name="searchAmountLeft"
          type="number"
          value={searchAmountLeft}
          onChange={onChangeInput}
        />
      </div>

      <div className="flex justify-center">
        <div className="min-w-[160px]">
          <Button
            label="Thêm mới"
            disabled={isButtonDisabled}
            loading={isUpdating}
            loadingLabel="Đang xử lý"
            onClick={onCreateUser}
          />
        </div>
      </div>
    </div>
  )
}
