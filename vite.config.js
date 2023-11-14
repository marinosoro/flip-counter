import { defineConfig } from 'vite';
import vue from "@vitejs/plugin-vue"; //add this line

export default defineConfig({
    build: {
        lib: {
            entry: 'src/index.js',
            formats: ['es'],
            name: 'FlipCounter'
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    Vue: 'vue'
                }
            }
        }
    },
    plugins: [
        vue(),
    ],
});
