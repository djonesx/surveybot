const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
    });
    await page.setDefaultNavigationTimeout(0);

    try {
        await page.goto('https://192.168.10.254', { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });

        await page.type('input[name="username"]', 'admin');
        await page.type('input[name="password"]', 'D@config!1');
        await page.click('button.submit_action');

        await page.waitForNavigation({ waitUntil: 'networkidle2' });
        console.log('Login successful!');

        await page.click('a[data-popup-tips*="Cellular 1"]');
        await page.waitForSelector('div.ui-dialog', { visible: true });
        console.log('Settings modal opened.');

        await page.evaluate(() => {
            $('button.band_selection_action').click();
        });
        console.log('Clicked "Clear" button successfully!');

        await page.evaluate(() => {
            $('input[name="band_list"][value="LTE_B1"]').click();
        });
        console.log('Ticked the checkbox successfully!');

        // Ensure the modal is fully interactive
        await page.waitForTimeout(2000);

        // Scroll the page to the bottom to ensure the "Save and Apply" button is in view
        const scrollResult = await page.evaluate(async () => {
            const scrollContainer = document.querySelector('body');
            scrollContainer.scrollTo(0, scrollContainer.scrollHeight);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return {
                scrollTop: scrollContainer.scrollTop,
                scrollHeight: scrollContainer.scrollHeight,
                clientHeight: scrollContainer.clientHeight,
                offsetHeight: scrollContainer.offsetHeight,
            };
        });
        console.log('Scroll result:', scrollResult);

        const buttonState = await page.evaluate(() => {
            const button = document.querySelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget:contains("Save and Apply")');
            return {
                exists: !!button,
                visible: button && button.offsetWidth > 0 && button.offsetHeight > 0,
                enabled: button && !button.disabled,
                position: button ? button.getBoundingClientRect() : null,
            };
        });
        console.log('Button state before click attempt:', buttonState);

        if (buttonState.exists && buttonState.visible && buttonState.enabled) {
            await page.evaluate(() => {
                const button = document.querySelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget:contains("Save and Apply")');
                $(button).trigger('click');
            });
            console.log('Save and Apply button clicked successfully!');

            // Wait for the settings modal to close
            await page.waitForFunction(() => !document.querySelector('div.ui-dialog'), { timeout: 30000 });
            console.log('Settings modal closed after saving.');
        } else {
            throw new Error('Save and Apply button is not visible or interactable.');
        }

    } catch (error) {
        console.error('Error during automation:', error);
    } finally {
        await browser.close();
    }
})();
