import { defineConfig } from '@playwright/test';

export default defineConfig({
    testDir: './tests',
    reporter: 'html', // Додай цей рядок обов'язково
    use: {
        browserName: 'chromium',
    },
});