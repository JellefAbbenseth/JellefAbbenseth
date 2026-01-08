import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig(({ mode: _mode }) => {
    const isGithubPages = process.env.VITE_GITHUB_PAGES === 'true'

    return {
        base: isGithubPages ? '/JellefAbbenseth/' : '/',
        plugins: [react()],
    }
});
