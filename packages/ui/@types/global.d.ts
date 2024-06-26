type ObjectValue<T extends object, K extends keyof T = keyof T> = T[K]

type RGBAColor = string // 'rgba(r,g,b,opacity)'

declare module '*.svg?url' {
  const content: any
  export default content
}
