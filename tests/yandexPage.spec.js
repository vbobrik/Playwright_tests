const { test, expect } = require('@playwright/test');
const URL = 'https://translate.yandex.com/';

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
})

test.describe('Word translation', () => {
    test('Input form presents on the page', async ({ page }) => {
        let field =  page.getByLabel('Start typing or insert a link').first();
        await expect(field).toBeVisible();
        await expect(page.locator("//*[@accept='image/*']/parent::div")).toBeVisible();
    })
    test('@Yandex Translate English word', async ({ page }) => {
        await page.goto(URL);
        let field =  page.getByLabel('Start typing or insert a link').first();
     
        await field.fill('words');
        await field.press('Enter');

        let translatedField = page.locator('#dstBox>div');
        await expect(translatedField.getByText('слова')).toBeVisible();
    })
});
