import React from 'react'

const CURRENT_YEAR = new Date().getFullYear()

interface Menu {
  content: string
  path: string
  newTab: boolean
}

export const menu: Menu[] = []

export const Footer = React.memo(() => {
  return (
    <div className="w-full">
      <div className={`relative z-10 flex max-lg:flex-col justify-center mx-auto`}>
        <div
          className="text-black relative z-10 flex items-center py-4
          justify-center text-center"
        >
          {`Copyright ©MetaSale ${CURRENT_YEAR} | All Rights Reserved`}
        </div>
      </div>
    </div>
  )
})
