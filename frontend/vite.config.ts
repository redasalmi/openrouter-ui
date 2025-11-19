import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import wails from '@wailsio/runtime/plugins/vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), solid(), wails('./bindings')],
})
