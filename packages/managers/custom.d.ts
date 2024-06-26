declare module '*.svg' {
  import React = require('react')

  export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
  const src: string
  export default src
}

type ObjectValue<T extends object, K extends keyof T = keyof T> = T[K]
