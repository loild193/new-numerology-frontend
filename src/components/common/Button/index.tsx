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
  let baseButtonClassName = `flex w-full justify-center rounded-md bg-primary-900
  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm
  hover:bg-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
  focus-visible:outline-primary-600`
  let spinnerClassName = 'w-4 h-4 mr-3 text-white'

  if (variant === 'no-background') {
    baseButtonClassName = `text-primary-900 hover:text-white border border-primary-600
    hover:bg-primary-900 focus:ring-4 focus:outline-none focus:ring-primary-400 font-medium rounded-lg
    text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-primary-400 dark:text-primary-400
    dark:hover:text-white dark:hover:bg-primary-600 dark:focus:ring-primary-900`
    spinnerClassName = 'text-gray-200'
  }
  if (disabled || loading) {
    baseButtonClassName = `${baseButtonClassName} !bg-primary-400 !dark:bg-primary-600 cursor-not-allowed`
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
