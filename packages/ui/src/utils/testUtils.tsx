import { render, RenderOptions } from '@testing-library/react'
import { PropsWithChildren, ReactElement } from 'react'

import { CustomThemeProvider } from '../context/CustomThemeProvider'

/**
 * Theme Provider 컴포넌트
 */
function ThemeProviders({ children }: PropsWithChildren<unknown>) {
  return <CustomThemeProvider>{children}</CustomThemeProvider>
}

/**
 * Jest의 렌더링을 감싼 CustemRender 함수
 * @param ui 리엑트 컴포넌트
 * @param options RenderOptions
 * @returns 컴포넌트
 */
const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'queryies'>,
) => {
  return render(ui, {
    wrapper: ThemeProviders,
    ...options,
  })
}

export { customRender as render }
