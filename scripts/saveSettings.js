async function saveSettings(page) {
    await page.click('#saveButton');
    await page.waitForTimeout(5000); // Wait for settings to save
  }
  
  module.exports = saveSettings;
  