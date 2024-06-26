import { defineConfig } from '@playwright/test'

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
require('dotenv').config()

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  // 테스트 파일 경로
  testDir: './playwright/tests',
  // 테스트 결과 파일 경로
  outputDir: './playwright/test-results',
  // 테스트 실행 전 실행할 파일 경로
  globalSetup: './playwright/settings/globalSetup.ts',

  // CI 환경에서 test.only 금지
  forbidOnly: !!process.env.CI,
  // CI 환경에서 retries 횟수를 2까지로 제한
  retries: process.env.CI ? 2 : 0,
  // CI 환경에서 워커의 수를 2까지로 제한
  workers: process.env.CI ? 2 : undefined,

  // 리포트 형식
  reporter: 'html',
  use: {
    // baseURL 설정
    baseURL: process.env.NEXT_PUBLIC_APP_HOST,

    // element test id 설정
    testIdAttribute: 'data-testid',
    // 인증 정보 저장 경로
    storageState: './playwright/settings/storageState.json',

    // 테스트 결과 파일 저장 설정
    trace: 'on',
  },
  projects: [
    {
      name: 'Chrome Stable',
      use: {
        browserName: 'chromium',
        // Test against Chrome Stable channel.
        channel: 'chrome',
      },
    },
    // {
    //   name: 'Desktop Safari',
    //   use: {
    //     browserName: 'webkit',
    //     viewport: { width: 1200, height: 750 },
    //   },
    // },
    // // Test against mobile viewports.
    // {
    //   name: 'Mobile Chrome',
    //   use: devices['Pixel 5'],
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: devices['iPhone 12'],
    // },
    // {
    //   name: 'Desktop Firefox',
    //   use: {
    //     browserName: 'firefox',
    //     viewport: { width: 800, height: 600 },
    //   },
    // },
  ],

  // 테스트 전 서버 실행
  webServer: {
    command: 'yarn dev',
    url: process.env.NEXT_PUBLIC_APP_HOST,
    // CI 환경에서는 실행하지 않음
    reuseExistingServer: !process.env.CI,
  },
})
