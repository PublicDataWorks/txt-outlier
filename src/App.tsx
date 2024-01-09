import type { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AppRoutes from './AppRoutes'
import AuthProvider from './providers/auth'

const queryClient = new QueryClient()

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={createBrowserRouter(AppRoutes)} />
      </AuthProvider>
    </QueryClientProvider>
  )
}
