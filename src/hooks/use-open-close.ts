'use client'

import { useState } from 'react'

export type TUseOpenCloseProps = {
  isOpen: boolean
  open: () => void
  close: () => void
}

const useOpenClose = (initialState: boolean = false): TUseOpenCloseProps => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState)

  const open = (): void => setIsOpen(true)
  const close = (): void => setIsOpen(false)

  return {
    isOpen,
    open,
    close
  }
}

export default useOpenClose
