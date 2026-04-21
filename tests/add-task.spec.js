import { test, expect } from '@playwright/test';

test('Перевірка доступності сторінки', async({ page }) => {
    // Можна тестувати будь-який сайт для звіту, наприклад Google
    await page.goto('https://www.google.com');
    await expect(page).toHaveTitle(/Google/);
});