import { defineConfig } from 'vite'
import { resolve } from 'path'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import { viteMockServe } from 'vite-plugin-mock'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    viteReact(),
    TanStackRouterVite(),
    viteMockServe(),
  ],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: resolve(__dirname, './src')
      },
      {
        find: "@api",
        replacement: resolve(__dirname, './src/api')
      },
      {
        find: "@assets",
        replacement: resolve(__dirname, './src/assets')
      },
      {
        find: "@components",
        replacement: resolve(__dirname, './src/components')
      },
      {
        find: "@layouts",
        replacement: resolve(__dirname, './src/layouts')
      },
      {
        find: "@lib",
        replacement: resolve(__dirname, './src/lib')
      },
      {
        find: "@pages",
        replacement: resolve(__dirname, './src/pages')
      },
      {
        find: "@router",
        replacement: resolve(__dirname, './src/router')
      },
    ]
  }
})
