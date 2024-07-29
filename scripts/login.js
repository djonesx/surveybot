const puppeteer = require('puppeteer');
const { deviceIP, username, password } = require('../config/config.json');

async function login(page) {
  try {
    await page.goto(`https://${deviceIP}`, { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });
    console.log("Page loaded.");

    await page.waitForSelector('input[name="username"]', { timeout: 5000 });
    await page.type('input[name="username"]', username);
    console.log("Entered username.");

    await page.waitForSelector('input[name="password"]', { timeout: 5000 });
    await page.type('input[name="password"]', password);
    console.log("Entered password.");

    await page.waitForSelector('button.submit_action', { timeout: 5000 });
    await page.click('button.submit_action');
    console.log("Clicked login button.");

    await page.waitForNavigation();
    console.log("Logged in and navigated.");
  } catch (error) {
    console.error("Error in login.js:", error);
    const errorContent = await page.content();
    console.log("Page content on error:\n", errorContent);
  }
}

module.exports = login;