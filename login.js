const puppeteer = require('puppeteer');

async function login(page) {
    await page.goto('https://192.168.10.254', { waitUntil: 'networkidle2', ignoreHTTPSErrors: true });

    // Enter username
    await page.type('input[name="username"]', 'admin');

    // Enter password
    await page.type('input[name="password"]', 'D@config!1');

    // Click the login button
    await page.click('button.submit_action');

    // Wait for navigation or a specific element that indicates a successful login
    await page.waitForSelector('.wan_status.conn_name.details_action', { timeout: 10000 });
    console.log('Login successful!');
}

module.exports = login;  // Ensure the login function is properly exported
