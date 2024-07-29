const puppeteer = require('puppeteer');
const { deviceIP, username, password } = require('./config/config.json');
const login = require('./scripts/login');
const openCellSettings = require('./scripts/openCellSettings');
const checkSIMEnabled = require('./checkSIMEnabled');
//const clickClearBands = require('./scripts/clickClearBands');
//const clickSaveAndApply = require('./scripts/clickSaveAndApply');

(async () => {
  try {
    console.log("Configuration Variables:");
    console.log("Device IP:", deviceIP);
    console.log("Username:", username);
    console.log("Password:", password);

    const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true });
    const page = await browser.newPage();

    // Set a larger viewport
    await page.setViewport({ width: 1920, height: 1080 });

    console.log("Logging in...");
    await login(page);

    console.log("Opening cell settings for Modem1...");
    await openCellSettings(page, 'Modem1');

    console.log("Checking and writing SIM checkboxes...");
    const simStatus = await checkSIMEnabled(page);
    fs.writeFileSync('config/cellularStatus.json', JSON.stringify(simStatus, null, 2));

//    console.log("Clicking 'Clear' button...");
//    await clickClearBands(page);

//    console.log("Clicking 'Save and Apply' button...");
//    await clickSaveAndApply(page);

    // Do not close the browser
    console.log("Script completed. Browser window remains open for further inspection.");
  } catch (error) {
    console.error("Error in main.js:", error);
  }
})();
