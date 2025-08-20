import { fileURLToPath, URL } from "node:url";
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  server: { host: "::", port: 8080 },
  plugins: [react(), tailwindcss()],
    resolve: {
    alias: {
      //Esta linea interpreta que un @ es la ruta donde tiene que compilar los componentes
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
})
