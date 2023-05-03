import React, { HTMLAttributes, PropsWithChildren } from 'react'
import { HtmlHead, Props as HeadProps } from '@components/layouts/HtmlHead'
import { SideBarAdmin } from '../SideBar'

type Props = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string
    showMenu?: boolean
    showConnectWalletButton?: boolean
    isWideScreen?: boolean
    footerClassName?: string
  }

const AdminLayout: React.FC<Props> = (props) => {
  const { children, className } = props
  return (
    <>
      <HtmlHead {...props} />
      <main className="sm:flex h-screen max-h-screen min-h-screen">
        <div className={`flex flex-row w-full ${className || ''}`}>
          <SideBarAdmin />
          <div className="ml-56 pt-2 pb-8 px-8 grow overflow-x-scroll">{children}</div>
        </div>
      </main>
    </>
  )
}

export default React.memo(AdminLayout)
