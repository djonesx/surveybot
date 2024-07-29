const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });

    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
    }

    try {
        await page.goto('https://192.168.10.254', { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });

        // Login
        await page.type('input[name="username"]', 'admin');
        await page.type('input[name="password"]', 'D@config!1');
        await page.click('button.submit_action');
        await page.waitForNavigation();
        console.log('Logged in successfully.');

        // Navigate to Cellular 1
        await page.waitForSelector('a.conn_name[data-popup-tips*="Cellular 1"]', { timeout: 20000 });
        await page.click('a.conn_name[data-popup-tips*="Cellular 1"]');
        console.log('Navigated to Cellular 1.');

        await page.waitForSelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget', { timeout: 20000 });
        console.log('Settings modal opened.');

        // Introduce a delay to ensure the modal has fully rendered
        await delay(3000);

        // Directly invoke the "Save and Apply" function handlers
        const triggerSave = await page.evaluate(async () => {
            const button = Array.from(document.querySelectorAll('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget'))
                .find(btn => btn.textContent.trim() === 'Save and Apply');
            if (button) {
                const me = $(button);

                console.log('Button found, checking validation...');
                try {
                    const validateResult = me.triggerHandler("validate");
                    console.log('Validation result:', validateResult);

                    if (validateResult) {
                        console.log('Validation passed.');
                        const info = me.triggerHandler("export", [false]);
                        console.log('Export info:', info);

                        if (info === false) {
                            console.log('Export failed.');
                            return 'Export failed';
                        }

                        await me.triggerHandler("warning", [info]).done(function () {
                            this[0].triggerHandler("save", [this[1]]);
                            console.log('Save triggered.');
                        }.bind([me, info]));
                        
                        return 'Save triggered';
                    } else {
                        console.log('Validation failed.');
                        return 'Validation failed';
                    }
                } catch (e) {
                    console.log('Error during validation:', e);
                    return 'Validation error';
                }
            }
            console.log('Button not found');
            return 'Button not found';
        });

        console.log(`Trigger Save Result: ${triggerSave}`);

        // Wait for any post-save actions to complete
        await delay(3000);

    } catch (error) {
        console.error('Error during automation:', error);
    } finally {
        // Close the browser
        // Commented out for debugging purposes
        // await browser.close();
    }
})();
