import type { KnipConfig } from 'knip'

const config: KnipConfig = {
  ignore: [
    'vite-env.d.ts',
    'tanstack-table.d.ts',
    'components/ui/**',
  ],
  ignoreDependencies: [],
  ignoreExportsUsedInFile: true,
  rules: {
    files: 'warn',
    exports: 'warn',
  },
}

export default config
