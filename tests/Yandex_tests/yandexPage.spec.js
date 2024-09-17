const { test, expect } = require('@playwright/test');
const TranslatePage = require('./TranslatePage')
const { selectors } = require('./data')
const URL = 'https://translate.yandex.com/';

test.beforeEach(async ({ page }) => {
    await page.goto(URL);
})

test.describe('Translation form is visible', () => {
    test('@Yandex Input form presents on the page', async ({ page }) => {
        let sourceField =  page.getByLabel(selectors.SOURCE_FIELD).first();
        let targetField =  page.getByLabel(selectors.SOURCE_FIELD).first();

        await expect(sourceField).toBeVisible();
        await expect(targetField).toBeVisible();
    });

    test('@Yandex Switch button presents', async ({ page }) => {
        let switchButton =  page.getByLabel(selectors.SWITCH_BUTTON);
        await expect(switchButton).toBeVisible();
    });

    test('@Yandex Source language button presents', async ({ page }) => {
        // let field =  page.getByLabel('Choose source language English');
        const langSourseButton =  page.locator(selectors.SOURCE_LANG_BUTTON);
        await expect(langSourseButton).toBeVisible();
    });

    test('@Yandex Target language button presents', async ({ page }) => {
        const targetButton = page.locator(selectors.TARGET_LANG_BUTTON);
        await expect(targetButton).toBeVisible();
    });


    test('@Yandex Switch button in focus', async ({ page }) => {
        const switchButton =  page.getByLabel(selectors.SWITCH_BUTTON);
        // const tip =  page.locator('[area-describedby="tippy-1"]');
        await switchButton.focus();
        await expect(switchButton).toBeFocused();
    });

    test('@Yandex Click the Switch button', async ({ page }) => {
        const langSourseButton = page.locator('#srcLangButton');
        const langTargetButton = page.locator('#dstLangButton');
        const textSourse = await langSourseButton.innerText();
        const textTarget = await langTargetButton.innerText();
        const switchButton =  page.getByLabel(selectors.SWITCH_BUTTON);
        await switchButton.click();
        console.log(textSourse)
        console.log(textTarget)
        expect(await langSourseButton.innerText()).toEqual(textTarget);
        expect(await langTargetButton.innerText()).toEqual(textSourse);
    })
});

test.describe('Word translation', () => {
    test('Input form presents on the page', async ({ page }) => {
        let field =  page.getByLabel(selectors.SOURCE_FIELD).first();
        await expect(field).toBeVisible();
        await expect(page.locator(selectors.TARGET_FIELD_IMG)).toBeVisible();
    })
    test('Translate English word', async ({ page }) => {
        let field =  page.getByLabel(selectors.SOURCE_FIELD).first();
     
        await field.fill('words');
        await field.press('Enter');

        let translatedField = page.locator(selectors.TARGET_FIELD);
        await expect(translatedField.getByText('слова')).toBeVisible();
    })
})
