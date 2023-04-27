import Image from 'next/image'

type Props = {
  label: string
}

export const TopForm = ({ label }: Props) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <Image src="/images/my-logo.png" alt="Logo" width={10} height={10} className="w-auto h-10 mx-auto" />
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">{label}</h2>
    </div>
  )
}
