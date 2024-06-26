module.exports = {
  moduleNameMapper: {
    '\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '^.+\\.svg': '<rootDir>/__mocks__/svgMock.jsx',
    '^@ui/(.*)$': '<rootDir>/../ui/src/$1',
    '^@utils/(.*)$': '<rootDir>/../utils/src/$1',
    '^@/(?!.*\\.svg)(.*)$': '<rootDir>/$1',
  },
  testMatch: [
    '<rootDir>/**/*.test.(js|jsx|ts|tsx)',
    '<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))',
  ],
  transformIgnorePatterns: [
    '<rootDir>/../../.yarn/cahce/',
  ],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', {
      presets: ['next/babel'],
      plugins: [
        '@babel/plugin-proposal-private-methods',
        '@emotion/babel-plugin',
      ],
    }],
  },
}
