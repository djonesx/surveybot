const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1280, height: 800 });
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9'
    });
    await page.setDefaultNavigationTimeout(0);

    const outputDir = __dirname;

    await page.goto('https://192.168.10.254', { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });

    // Perform login
    await page.type('input[name="username"]', 'admin');
    await page.type('input[name="password"]', 'D@config!1');
    await page.click('button.submit_action');

    await page.waitForNavigation({ waitUntil: 'networkidle2' });

    // Navigate to Cellular 1 settings
    await page.click('a[data-popup-tips*="Cellular 1"]');

    // Introduce a 2-second delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Capture HTML content after clicking the link
    const htmlAfterClick = await page.content();
    fs.writeFileSync(path.join(outputDir, 'after_click.html'), htmlAfterClick);

    // Save the browser state to resume later in step2.js
    const sessionData = {
        userAgent: await page.browser().userAgent(),
        viewport: page.viewport(),
        cookies: await page.cookies(),
    };
    fs.writeFileSync(path.join(outputDir, 'session_data.json'), JSON.stringify(sessionData));

    // Close the browser
    await browser.close();
})();
