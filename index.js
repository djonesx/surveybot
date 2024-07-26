const puppeteer = require('puppeteer');
const login = require('./login');
const navigateToCellular1 = require('./navigate');
const clickClearButton = require('./clearButton');
const tickCheckbox = require('./tickCheckbox');
const saveSettings = require('./saveSettings');
const config = require('./config.json');
const logger = require('./logger');

(async () => {
    logger.info('Starting the script...');
    const browser = await puppeteer.launch({
        headless: false,
        args: ['--ignore-certificate-errors']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: config.viewportWidth, height: config.viewportHeight });
    await page.setExtraHTTPHeaders({
        'Accept-Language': 'en-US,en;q=0.9',
    });
    await page.setDefaultNavigationTimeout(0);

    try {
        await login(page, config.url, config.username, config.password);
        await navigateToCellular1(page);

        // Take a screenshot for debugging purposes
        await page.screenshot({ path: 'debug.png', fullPage: true });

        await clickClearButton(page);
        await tickCheckbox(page);
        await saveSettings(page);
    } catch (e) {
        logger.error(`Error occurred: ${e.message}`);
    } finally {
        // Close the browser
        // await browser.close(); // Uncomment to close the browser after debugging
        logger.info('Script finished.');
    }
})();
