import { defineConfig } from 'vitest/config'
import vitePlugin from 'vite-plugin-feature'
import rollupPlugin from 'rollup-plugin-feature'

export default defineConfig({
  plugins: [
    framework(),
    vitePlugin(),
    rollupPlugin()
  ],
  test: {
    includeSource: ['src/**/*.{js,ts}'],
    setupFiles: ['./database_test_setup.ts']
  }
})
