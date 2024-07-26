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

        // Directly trigger the click event on the "Cancel" button
        const clickResult = await page.evaluate(() => {
            const button = Array.from(document.querySelectorAll('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget'))
                .find(btn => btn.textContent.trim() === 'Cancel');
            if (button) {
                button.click();
                return true;
            }
            return false;
        });

        if (clickResult) {
            console.log('Cancel button clicked programmatically.');
        } else {
            console.error('Cancel button not found.');
        }

        // Wait for any post-cancel actions to complete
        await delay(3000);

    } catch (error) {
        console.error('Error during automation:', error);
    } finally {
        // Close the browser
        // Commented out for debugging purposes
        // await browser.close();
    }
})();
