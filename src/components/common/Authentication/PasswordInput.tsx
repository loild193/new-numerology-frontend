import { ChangeEvent, useState } from 'react'

type Props = {
  name: string
  label: string
  value: string
  disabled?: boolean
  placeholder?: string
  errorMessage?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const PasswordInput = ({ name, label, value, disabled = false, placeholder, errorMessage, onChange }: Props) => {
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)

  const onTogglePasswordInput = () => {
    setIsShowPassword(!isShowPassword)
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative">
        <input
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-1.5 px-2
          text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-primary-900 sm:text-sm sm:leading-6"
          type={isShowPassword ? 'text' : 'password'}
          disabled={disabled}
          placeholder={placeholder || ''}
          value={value}
          onChange={onChange}
        />
        <button type="button" className="absolute right-2 top-[calc(50%-10px)]" onClick={onTogglePasswordInput}>
          {isShowPassword ? (
            <img src="/images/eye-close.svg" alt="Hide password" className="w-5 h-5" />
          ) : (
            <img src="/images/eye-open.svg" alt="Show password" className="w-5 h-5" />
          )}
        </button>

        {errorMessage ? <p className="text-red-500 mt-2">{errorMessage}</p> : null}
      </div>
    </div>
  )
}
