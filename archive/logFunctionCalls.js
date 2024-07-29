const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto('https://192.168.10.254', { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });

    // Login
    await page.type('input[name="username"]', 'admin');
    await page.type('input[name="password"]', 'D@config!1');
    await page.click('button.submit_action');
    await page.waitForNavigation();

    // Navigate to Cellular 1
    await page.click('a[data-popup-tips*="Cellular 1"]');
    await page.waitForSelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget');

    // Log all function calls when Save and Apply button is clicked
    await page.exposeFunction('logFunction', functionName => {
        console.log(`Function called: ${functionName}`);
    });

    await page.evaluate(() => {
        const originalFunction = Function.prototype.call;
        Function.prototype.call = function() {
            window.logFunction(this.name);
            return originalFunction.apply(this, arguments);
        };
    });

    // Click the "Clear" button
    await page.click('button.band_selection_action');
    await page.waitForTimeout(2000); // Wait for 2 seconds

    // Tick the checkbox
    await page.evaluate(() => {
        document.querySelector('input[name="band_list"][value="LTE_B1"]').click();
    });

    // Click the "Save and Apply" button and log function calls
    await page.click('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget');

    // Wait for the modal to close
    await page.waitForFunction(() => !document.querySelector('.ui-dialog-content:visible'), { timeout: 20000 });

    console.log('Save and Apply action triggered successfully and settings saved!');

    // Close the browser
    await browser.close();
})();
