import React, { useRef, useState } from 'react'
import { MobileHeader } from '../MobileHeader'
import { MobileSidebar } from '../MobileSidebar'
import { useClickOutside } from '@hooks/useClickOutside'

export const MobileLayout = React.memo(() => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true)
  const toggleRef = useRef<HTMLImageElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useClickOutside(contentRef, toggleRef, (value) => setIsCollapsed(!value))

  const onCollapsed = () => {
    setIsCollapsed(!isCollapsed)
  }

  return (
    <div className="max-sm:block sm:hidden">
      <MobileHeader onCollapseSidebar={onCollapsed} ref={toggleRef} />
      <MobileSidebar isCollapsed={isCollapsed} ref={contentRef} />
    </div>
  )
})
