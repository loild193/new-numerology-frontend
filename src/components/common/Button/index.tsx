import { Spinner } from 'flowbite-react'

type Props = {
  label: string
  loading: boolean
  loadingLabel: string
  disabled?: boolean
  variant?: 'background' | 'no-background'
  onClick: () => void
}

export const Button = ({ label, disabled = false, variant = 'background', loading, loadingLabel, onClick }: Props) => {
  let baseButtonClassName = `flex w-full justify-center rounded-md bg-indigo-600
  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
  hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-indigo-600`
  let spinnerClassName = 'w-4 h-4 mr-3 text-white'

  if (variant === 'no-background') {
    baseButtonClassName = `text-purple-700 hover:text-white border border-indigo-700
    hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg
    text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-indigo-400 dark:text-indigo-400
    dark:hover:text-white dark:hover:bg-indigo-500 dark:focus:ring-indigo-900`
    spinnerClassName = 'text-gray-200'
  }
  if (disabled || loading) {
    baseButtonClassName = `${baseButtonClassName} !bg-indigo-400 !dark:bg-indigo-500 cursor-not-allowed`
  }

  return (
    <button className={baseButtonClassName} disabled={disabled} onClick={onClick}>
      {loading ? (
        <>
          <Spinner className={spinnerClassName} />
          {loadingLabel}
        </>
      ) : (
        <span>{label}</span>
      )}
    </button>
  )
}
