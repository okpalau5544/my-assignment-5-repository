import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    // Remove the non-existent plugins for now
  ],
  test: {
    includeSource: ['src/**/*.{js,ts}', 'adapter/**/*', 'tests/**/*'],
    setupFiles: ['./database_test_setup.ts']
  }
})
