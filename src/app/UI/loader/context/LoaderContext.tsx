'use client'

import { createContext, useContext, useMemo } from 'react'
import type { ReactNode } from 'react'

import { useBoolean } from '@/UI/hooks'

import { Loader } from '@/UI/loader'

export const LoaderContext = createContext({
  hideLoader: () => {},
  isLoading: false,
  showLoader: () => {},
})

export const LoaderProvider = ({ children }: { children?: ReactNode }) => {
  const [isLoading, { setFalse: hideLoader, setTrue: showLoader }] = useBoolean(false)

  const contextValue = useMemo(
    () => ({ hideLoader, isLoading, showLoader }),
    [isLoading, showLoader, hideLoader],
  )

  return (
    <LoaderContext.Provider value={contextValue}>
      {isLoading && <Loader />}
      {children}
    </LoaderContext.Provider>
  )
}

export const useLoader = () => useContext(LoaderContext)
