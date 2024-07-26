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

        // Log viewport dimensions
        const viewport = await page.viewport();
        console.log('Viewport:', viewport);

        // Navigate to Cellular 1
        await page.waitForSelector('a.conn_name[data-popup-tips*="Cellular 1"]', { timeout: 20000 });
        await page.click('a.conn_name[data-popup-tips*="Cellular 1"]');
        console.log('Navigated to Cellular 1.');

        await page.waitForSelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget', { timeout: 20000 });
        console.log('Settings modal opened.');

        // Introduce a delay to ensure the modal has fully rendered
        await delay(3000);

        // Force at least 2 scrolls
        for (let i = 0; i < 2; i++) {  // Force 2 scroll attempts
            await page.evaluate(() => {
                window.scrollBy(0, window.innerHeight);
            });

            // Wait for a short period to ensure scroll is completed
            await delay(1000);

            const scrollPosition = await page.evaluate(() => ({
                scrollTop: window.scrollY,
                scrollHeight: document.body.scrollHeight,
                clientHeight: document.documentElement.clientHeight
            }));

            console.log(`Scroll attempt ${i + 1}:`, scrollPosition);
        }

        // Debugging: Check the position of the "Save and Apply" button
        const buttonPosition = await page.evaluate(() => {
            const button = document.querySelector('div.ui-dialog-buttonpane button.ui-button.ui-corner-all.ui-widget');
            if (button) {
                const rect = button.getBoundingClientRect();
                return {
                    top: rect.top,
                    left: rect.left,
                    bottom: rect.bottom,
                    right: rect.right,
                    width: rect.width,
                    height: rect.height
                };
            }
            return null;
        });

        console.log('Button position:', buttonPosition);

    } catch (error) {
        console.error('Error during automation:', error);
    } finally {
        // Close the browser
        // Commented out for debugging purposes
        // await browser.close();
    }
})();
