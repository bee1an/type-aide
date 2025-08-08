// import fs from 'node:fs'
import { defineConfig } from 'tsdown'

export default defineConfig({
  entry: './src/index.d.ts',
  sourcemap: false,
  clean: true,
  treeshake: false,
  copy: [
    { from: 'README.md', to: 'dist/README.md' },
    { from: 'package.json', to: 'dist/package.json' },
  ],
  // plugins: [
  //   {
  //     name: 'tsdown-plugin-tempPackage',
  //     buildStart: () => {
  //       const retainKeys = []

  //       const packageJSON = JSON.parse(fs.readFileSync('./package.json', 'utf-8').toString())

  //       console.log('package', packageJSON)
  //     },
  //     buildEnd: () => {
  //       console.log('buildEnd')
  //     },
  //   },
  // ],
})
