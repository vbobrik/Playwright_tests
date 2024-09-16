const { test, expect } = require('@playwright/test');
const URL = 'https://translate.yandex.com/';

// test.beforeEach(async ({ page }) => {
//     await page.goto(URL);
// })

// test.describe('Word translation', () => {
    test('@Yandex Translate English word', async ({ page }) => {
        await page.goto(URL);
        // let field = page.getByLabel('fakeArea');
        let field =  page.locator('#srcLabel');
        await field.click();
        // await expect(page).toHaveTitle(/translate/);
        await field.fill('words');
        await field.press('Enter');

        let translatedField = page.getById('dstBox');
        await expect(translatedField.getByText('слова')).toBeVisible();
    })
// });
