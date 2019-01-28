import babel from 'rollup-plugin-babel'

import pkg from './package.json'

export default [
  // CommonJS
  {
    input: 'src/index.js',
    output: { file: 'lib/react-nesta.js', format: 'cjs', indent: false },
    external: [
      ...Object.keys(pkg.dependencies || {}),
      ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [babel()],
  },
]
