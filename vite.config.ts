import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

const baseUrl = process.env.GITHUB_PAGES ? '/JellefAbbenseth/' : '/';

export default defineConfig({
  base: baseUrl,
  plugins: [react()],
});
