import { ChangeEvent } from 'react'

type Props = {
  label: string
  name: string
  value: string
  options: any[]
  errorMessage?: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
}

export const Select: React.FC<Props> = ({ label, name, value, options, errorMessage, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>
      <select
        name={name}
        className="appearance-none bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg
               focus:ring-blue-500 focus:border-blue-500 block w-full p-3
              dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500
               dark:focus:border-blue-500
              max-xs:text-xs max-xs:px-[6px]"
        value={value}
        onChange={onChange}
      >
        {options.map((time) => (
          <option key={time.label} value={time.value}>
            {time.label}
          </option>
        ))}
      </select>
      {errorMessage ? <p className="absolute -bottom-[24px] left-0 text-red-500 text-sm">{errorMessage}</p> : null}
    </div>
  )
}
