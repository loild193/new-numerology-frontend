import { ReactNode } from 'react'

type Props = {
  closeModal: () => any
  children: ReactNode
  title?: string
}

export const Modal = ({ children, title, closeModal }: Props) => {
  return (
    <div className="relative w-fit p-4 md:p-0 md:px-[50px] md:pt-12 md:pb-10 bg-[#111317]">
      <div
        className="w-[42px] h-[42px] rounded-full flex justify-center items-center cursor-pointer
          absolute top-0 right-0 bg-[#FFFFFF] transform translate-x-1/3 -translate-y-1/3 z-20"
        onClick={closeModal}
      >
        <img
          src="/images/common/close.png"
          alt="close icon"
          className="absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      {title && (
        <div
          className="w-fit mx-auto uppercase  text-[18px] md:text-[24px]
            bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-500 mb-[46px]"
        >
          {title}
        </div>
      )}
      {children}
    </div>
  )
}
