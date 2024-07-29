const puppeteer = require('puppeteer-core');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    headless: false,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--ignore-certificate-errors'
    ]
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto('https://10.10.112.1', { waitUntil: 'networkidle2', timeout: 0 });

  // Capture and log the page content to help find the correct selector
  const pageContent = await page.content();
  fs.writeFileSync('login_page.html', pageContent);
  console.log('Saved page content to login_page.html. Please inspect this file to find the correct selectors for the login input fields.');

  // Perform login
  await page.type('input[name="username"]', 'admin');
  await page.type('input[name="password"]', 'D@config!1');
  await Promise.all([
    page.waitForNavigation({ waitUntil: 'networkidle2', timeout: 0 }),
    page.click('button.submit_action')
  ]);

  // Navigate to Cellular 1 settings
  await Promise.all([
    page.click('a[data-popup-tips*="[107] Cell 1"]')
  ]);
  
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await delay(3000)

  await delay(10000)

  console.log('Run step2.js to continue automation.');

   // Scroll down to make the "Save and Apply" button visible
   await page.evaluate(() => {
    window.scrollBy(0, window.innerHeight * 3);
  });

  // Wait for the button to appear and click it
  await page.waitForSelector('[aria-labelledby="ui-id-12"] .ui-dialog-buttonpane button', { visible: true, timeout: 10000 });
  await page.evaluate(()=>document.querySelector('[aria-labelledby="ui-id-12"] .ui-dialog-buttonpane button').click())

  console.log('Clicked "Save and Apply" button successfully!');
})();
