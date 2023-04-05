import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// 파일 경로에서 상위폴더(../)를 @로 축약
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // 파일 경로에서 상위폴더(../)를 @로 축약
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src')}]
    // and then add "paths": {"@/*": ["./src/*"]} to tsconfig file
  },
});
