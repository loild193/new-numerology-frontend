import React from 'react'
import { ToastContainer } from 'react-toastify'

export const Header = () => {
  return (
    <div>
      <button>Header</button>
      <ToastContainer />
    </div>
  )
}

export default React.memo(Header)
