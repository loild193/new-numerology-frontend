import React, { HTMLAttributes, PropsWithChildren } from 'react'
import dynamic from 'next/dynamic'
import { HtmlHead, Props as HeadProps } from '@components/layouts/HtmlHead'
import Header from '@components/layouts/Header'

const Footer = dynamic(() => import('../Footer/index').then((mod) => mod.Footer))

type Props = PropsWithChildren<HeadProps> &
  HTMLAttributes<HTMLDivElement> & {
    mainClassName?: string
    showMenu?: boolean
    showConnectWalletButton?: boolean
    isWideScreen?: boolean
    footerClassName?: string
  }

const MainLayout: React.FC<Props> = (props) => {
  const { children, className } = props
  return (
    <>
      <HtmlHead {...props} />
      <main className="sm:flex">
        <div className={`flex-auto container-w overflow-y-auto ${className || ''}`}>
          <Header />
          {children}
          <Footer />
        </div>
      </main>
    </>
  )
}

export default React.memo(MainLayout)
