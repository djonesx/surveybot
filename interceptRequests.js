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
    await page.waitForSelector('a.conn_name[data-popup-tips*="Cellular 1"]', { timeout: 10000 });
    await page.click('a.conn_name[data-popup-tips*="Cellular 1"]');
    await page.waitForSelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget');

    // Intercept network requests
    page.on('request', request => {
        console.log('Request:', request.url(), request.method(), request.postData());
    });

    page.on('response', response => {
        console.log('Response:', response.url(), response.status(), response.statusText());
    });

    // Wait for the Clear button to be present in the DOM and visible
    await page.waitForSelector('button.band_selection_action', { visible: true, timeout: 10000 });

    // Click the "Clear" button
    await page.click('button.band_selection_action');

    // Add delay using evaluate and setTimeout
    await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 2000))); // Wait for 2 seconds

    // Tick the checkbox
    await page.evaluate(() => {
        document.querySelector('input[name="band_list"][value="LTE_B1"]').click();
    });

    // Click the "Save and Apply" button
    await page.waitForSelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget', { visible: true, timeout: 10000 });
    await page.click('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget');

    // Wait for the modal to close
    await page.waitForFunction(() => !document.querySelector('.ui-dialog-content:visible'), { timeout: 20000 });

    console.log('Save and Apply action triggered successfully and settings saved!');

    // Close the browser
    await browser.close();
})();
