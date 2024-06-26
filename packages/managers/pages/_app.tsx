import { CustomThemeProvider } from '@leejangheon/ui'
import type { AppProps } from 'next/app'
import {
  QueryClient, QueryClientProvider,
} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
})

/**
 * App 컴포넌트
 */
function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <CustomThemeProvider>
        <Component {...pageProps} />
      </CustomThemeProvider>
    </QueryClientProvider>
  )
}

export default App
