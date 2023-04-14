import React from 'react'

interface Props {
  onCollapseSidebar: () => void
}

export const MobileHeader: React.FC<Props> = React.forwardRef(({}, ref: React.ForwardedRef<HTMLImageElement>) => {
  return (
    <div className="sm:hidden relative flex justify-center items-center py-4">
      <img ref={ref} src="/images/menu.svg" alt="Menu" className="w-8 h-8 absolute left-8 top-[calc(50%-16px)]" />
      <img src="/images/my-logo.png" alt="Logo" className="aspect-auto w-[64px]" />
    </div>
  )
})
