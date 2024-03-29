import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.spec.ts',
    baseUrl: 'http://localhost:5173',
  },
  component: {
    specPattern: 'src/**/__tests__/*.spec.ts',
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
  viewportWidth: 400,
  viewportHeight: 300,
})
