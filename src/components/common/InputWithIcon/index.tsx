import { ChangeEvent } from 'react'
import { ClearIcon } from '../Icon/Clear'

type Props = {
  name: string
  label: string
  value: string | number
  type?: 'text' | 'number'
  disabled?: boolean
  placeholder?: string
  errorMessage?: string
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  onClickButton: (name: string) => void
}

export const InputWithIcon = ({
  name,
  label,
  value,
  type = 'text',
  disabled = false,
  placeholder,
  errorMessage,
  onChange,
  onClickButton,
}: Props) => {
  const renderValue = typeof value === 'number' ? (value <= 0 ? '' : value) : value

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading-6 text-gray-900">
        {label}
      </label>
      <div className="mt-2 relative ">
        <ClearIcon
          className="cursor-pointer w-6 h-6 absolute
        top-1/2 transform -translate-y-1/2 right-3 text-gray-400
        hover:text-gray-900"
          onClick={() => onClickButton(name)}
        />
        <input
          id={name}
          name={name}
          className="block w-full rounded-md border-0 py-1.5 pl-2 pr-10
          text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400
          focus:ring-2 focus:ring-inset focus:ring-primary-900 sm:text-sm sm:leading-6"
          type={type}
          disabled={disabled}
          placeholder={placeholder || ''}
          value={renderValue}
          onChange={onChange}
        />
        {errorMessage ? <p className="text-red-500 mt-2">{errorMessage}</p> : null}
      </div>
    </div>
  )
}
