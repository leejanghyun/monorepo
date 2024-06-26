import {
  DetailedHTMLProps, HTMLAttributes, memo, ReactNode, useEffect, useRef, useState,
} from 'react'
import { createPortal } from 'react-dom'

interface PortalProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  children: ReactNode
}

const NEXT_ID = '__next'
const PORTAL_ID = '__portal'

function Portal({
  id = PORTAL_ID,
  children,
}: PortalProps) {
  const portalRef = useRef<HTMLElement | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    portalRef.current = document.getElementById(id)

    if (!portalRef.current) {
      const nextContainer = document?.getElementById(NEXT_ID)

      portalRef.current = document?.createElement('div')
      portalRef.current.id = id

      if (nextContainer) {
        nextContainer.appendChild(portalRef.current)
      } else if (document.body) {
        document.body.appendChild(portalRef.current)
      }
    }

    setMounted(true)
  }, [id])

  if (!mounted || !portalRef.current) {
    return null
  }

  return createPortal(children, portalRef.current)
}

export default memo(Portal)
