const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  // Read the WebSocket endpoint from file
  const wsEndpoint = fs.readFileSync('browser_ws_endpoint.txt', 'utf-8').trim();

  // Connect to the existing browser instance
  const browser = await puppeteer.connect({
    browserWSEndpoint: wsEndpoint
  });

  // Use the saved session data to set cookies and other parameters
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });

  const sessionData = require('./session_data.json');
  await page.setUserAgent(sessionData.userAgent);
  await page.setViewport(sessionData.viewport);
  for (let cookie of sessionData.cookies) {
    await page.setCookie(cookie);
  }

  // Go to the last captured URL
  await page.goto('https://10.10.112.1/cgi-bin/MANGA/index.cgi');

  try {
    // Scroll down to make the "Save and Apply" button visible
    await page.evaluate(() => {
      window.scrollBy(0, window.innerHeight * 3);
    });

    // Wait for the button to appear and click it
    await page.waitForSelector('body > div:nth-child(16) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)', { visible: true, timeout: 10000 });
    await page.evaluate(()=>document.querySelector('body > div:nth-child(16) > div.ui-dialog-buttonpane.ui-widget-content.ui-helper-clearfix > div > button:nth-child(1)').click())

    console.log('Clicked "Save and Apply" button successfully!');
  } catch (error) {
    console.error('Error during automation:', error);
    await page.screenshot({ path: 'error.png' });
    fs.writeFileSync('error.html', await page.content());
  }

  // Keeping the browser open for further inspection
})();
