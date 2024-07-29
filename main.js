const puppeteer = require('puppeteer');
const { deviceIP, username, password } = require('./config/config.json');
const login = require('./scripts/login');
const openCellSettings = require('./scripts/openCellSettings');
const saveSettings = require('./scripts/saveSettings');

(async () => {
  try {
    console.log("Configuration Variables:");
    console.log("Device IP:", deviceIP);
    console.log("Username:", username);
    console.log("Password:", password);

    const browser = await puppeteer.launch({ headless: false, ignoreHTTPSErrors: true });
    const page = await browser.newPage();

    console.log("Logging in...");
    await login(page);

    console.log("Opening cell settings...");
    await openCellSettings(page);

//    console.log("Saving settings...");
//    await saveSettings(page);

    // Do not close the browser
    console.log("Script completed. Browser window remains open for further inspection.");
  } catch (error) {
    console.error("Error in main.js:", error);
  }
})();
