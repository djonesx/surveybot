const { networkConfigs } = require('../config/config.json');

async function openCellSettings(page, modem) {
  try {
    console.log(`Opening settings for: ${modem}`);
    const cellularLinkText = networkConfigs.Modems[modem];
    console.log(`Cellular link text: ${cellularLinkText}`);
    
    if (!cellularLinkText) {
      console.error(`No cellular link text found for modem: ${modem}`);
      return;
    }
    
    await page.waitForSelector('.wan_status.conn_name.details_action', { timeout: 10000 });

    const cellularLinkExists = await page.evaluate((cellularLinkText) => {
      const link = Array.from(document.querySelectorAll('.wan_status.conn_name.details_action'))
                        .find(element => element.textContent.includes(cellularLinkText));
      if (link) {
        link.click();
        return true;
      }
      return false;
    }, cellularLinkText);

    if (cellularLinkExists) {
      console.log(`Clicked '${cellularLinkText}' link.`);
    } else {
      console.error(`'${cellularLinkText}' link not found.`);
    }
  } catch (error) {
    console.error("Error in openCellSettings:", error);
    const errorContent = await page.content();
    console.log("Page content on error:\n", errorContent);
  }
}

module.exports = openCellSettings;
