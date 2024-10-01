import routeFn from 'ziggy-js'
import { createContext, useContext } from 'react'

declare global {
  const route: typeof routeFn
}

export const RouteContext = createContext<typeof route | null>(null)

export default function useRoute(): typeof route {
  const fn = useContext(RouteContext)
  if (!fn) {
    throw new Error('Route function must be provided')
  }
  return fn
}
