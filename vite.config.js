import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                }
            }
        }),
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@img': path.resolve(__dirname, 'resources/scss/images'),
            '@scss': path.resolve(__dirname, 'resources/scss'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
              @import "@scss/vars.scss";
            `
            }
        }
    }
});