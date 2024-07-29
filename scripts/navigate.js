
async function navigate(page, url) {
  console.log("Rnnning NAVIGATE");

    await page.goto(url);
    await page.waitForSelector('#mainContent');
  }
  
  module.exports = navigate;
  