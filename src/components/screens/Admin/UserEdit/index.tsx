import { ChangeEvent, useState } from 'react'
import { useRouter } from 'next/router'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { Button as OutlineButton } from 'flowbite-react'
import { Input } from '@components/common/Authentication/Input'
import { Button } from '@components/common/Button'
import { ServerResponse as DetailUserServerResponse } from '@models/api/admin/detailUser'
import {
  DEFAULT_ERROR_MESSAGE,
  ERROR_MAPPING,
  ServerResponse as UpdateUserServerResponse,
} from '@models/api/admin/updateUser'
import { User } from '@models/api/admin/getUsers'
import { REACT_QUERY_KEY } from '@models/keys'
import { NOTIFICATION_TYPE, notify } from '@utils/notify'
import logger from '@utils/logger'
import { PasswordInput } from '@components/common/Authentication/PasswordInput'

type UserForm = Omit<User & { password: string }, 'role'>

const fetchUser = async (id: string) => {
  try {
    const response = await fetch('/api/admin/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
      credentials: 'same-origin',
    })
    const rawResponse = (await response.json()) as DetailUserServerResponse

    return rawResponse
  } catch (error) {
    logger.error('[fetchUser]', error)
  }
}

const updateUser = async (input: { id: string; userId: string; password: string; searchAmountLeft?: number }) => {
  try {
    const response = await fetch('/api/admin/update-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ ...input }),
      credentials: 'same-origin',
    })
    const rawResponse = (await response.json()) as UpdateUserServerResponse

    return rawResponse
  } catch (error) {
    logger.error('[fetchUser]', error)
  }
}

export const UserEdit = () => {
  const router = useRouter()
  const { id } = router.query as { id: string }
  const queryClient = useQueryClient()

  const [userForm, setUserForm] = useState<UserForm>({
    id,
    username: '',
    email: '',
    phone: '',
    userId: '',
    password: '',
    searchAmountLeft: 0,
  })

  const { data: user, isLoading: isFetchingUser } = useQuery({
    queryKey: [REACT_QUERY_KEY.ADMIN_DETAIL_USER, id],
    queryFn: () => fetchUser(id),
    retry: 2,
    refetchOnWindowFocus: false,
    onSuccess: (data) => {
      if (data && data.success && data.response) {
        setUserForm((prev) => ({ ...prev, ...data.response, userId: data.response.userId ?? '' }))
      }
    },
  })

  const { mutate, isLoading: isUpdating } = useMutation({
    mutationFn: updateUser,
    onSuccess: (data) => {
      if (data && data.success && data.response.userId) {
        void queryClient.invalidateQueries([REACT_QUERY_KEY.ADMIN_GET_USERS])
        notify(NOTIFICATION_TYPE.SUCCESS, 'Cập nhật thông tin thành công')
        setTimeout(() => {
          void router.push('/admin/users')
        }, 2000)
      }
    },
    onError: (error: any) => {
      logger.error('[updateUser]', error)
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

  const onUpdateUser = () => {
    mutate({ id, userId: userId ?? '', password, searchAmountLeft })
  }

  const { username, email, phone, userId, password, searchAmountLeft } = userForm
  const isButtonDisabled = isUpdating || !userId || !password || !searchAmountLeft

  return (
    <div className="pb-8">
      <div className="flex gap-x-4 items-center">
        <OutlineButton outline={true} onClick={onBack}>
          Quay lại
        </OutlineButton>
        <p className="text-xl">
          ID tài khoản: <span className="font-semibold">{id}</span>
        </p>
      </div>
      {!user?.response?.userId ? (
        <p className="my-2 text-red-500">Tài khoản này chưa được cấp tên đăng nhập và mật khẩu</p>
      ) : (
        <p className="my-2 text-green-500">Tài khoản này đã được cấp tên đăng nhập và mật khẩu</p>
      )}
      <div className="mt-6 mb-8 flex flex-col gap-y-4">
        <div className="grid grid-cols-3 gap-x-6">
          <Input label="Họ và tên" name="username" disabled={true} value={username} onChange={onChangeInput} />
          <Input label="Email" name="email" disabled={true} value={email} onChange={onChangeInput} />
          <Input label="Số điện thoại" name="phone" disabled={true} value={phone} onChange={onChangeInput} />
        </div>
        <Input
          label="Tên đăng nhập"
          name="userId"
          disabled={isFetchingUser || isUpdating}
          value={userId ?? ''}
          onChange={onChangeInput}
        />
        <PasswordInput
          label="Mật khẩu"
          name="password"
          disabled={isFetchingUser || isUpdating}
          value={password}
          onChange={onChangeInput}
        />
        <Input
          label="Số lần tra cứu còn lại"
          name="searchAmountLeft"
          type="number"
          value={searchAmountLeft}
          onChange={onChangeInput}
        />
      </div>

      <div className="flex justify-center">
        <div className="min-w-[160px]">
          <Button
            label="Cập nhật"
            disabled={isButtonDisabled}
            loading={isUpdating}
            loadingLabel="Đang xử lý"
            onClick={onUpdateUser}
          />
        </div>
      </div>
    </div>
  )
}
