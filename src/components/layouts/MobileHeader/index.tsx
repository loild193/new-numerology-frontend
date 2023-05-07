import React from 'react'
import Image from 'next/image'

interface Props {
  onCollapseSidebar: () => void
}

export const MobileHeader: React.FC<Props> = React.forwardRef(({}, ref: React.ForwardedRef<HTMLImageElement>) => {
  return (
    <div className="sm:hidden relative flex justify-center items-center py-4">
      <img ref={ref} src="/images/menu.svg" alt="Menu" className="w-8 h-8 absolute left-8 top-[calc(50%-16px)]" />
      <Image src="/images/logo.png" alt="Logo" width={64} height={32} className="aspect-auto" />
    </div>
  )
})
