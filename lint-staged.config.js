module.exports = {
  '*.+(ts|tsx)': [() => 'yarn tsc -p tsconfig.json --noEmit'],
  'packages/managers/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/managers/tsconfig.json --noEmit',
  ],
  'packages/ui/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/ui/tsconfig.json --noEmit',
  ],
  'packages/utils/**/*.+(ts|tsx)': [
    () => 'yarn tsc -p packages/utils/tsconfig.json --noEmit',
  ],
  'packages/**/*.+(ts|tsx|js|jsx)': ['yarn lint'],
}
