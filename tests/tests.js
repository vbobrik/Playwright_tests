const {webkit, chromium, firefox} = require('playwright');

(async () => {
    for (const browserType of [webkit, chromium, firefox]) {
        let browser = await browserType.launch();
        let page = await browser.newPage();
        await page.goto('https://yandex.by/?npr=1');
        await page.screenshot({
            path: `screenshot-${browserType.name()}.png`
        });
        await browser.close();
        console.log('success: ' + browserType.name());
    }
}) ();