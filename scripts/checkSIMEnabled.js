//const puppeteer = require('puppeteer');
//const fs = require('fs');
console.log("Running checkSIMEnabled.js");
async function checkSIMEnabled(page, modem) {
  const result = {};

  // Selectors for SIM A and SIM B checkboxes
  const simACheckboxSelector = '.sim_card_custom_selection input[value="1"]';
  const simBCheckboxSelector = '.sim_card_custom_selection input[value="2"]';

  const isSimAEnabled = await page.$eval(simACheckboxSelector, el => el.checked);
  const isSimBEnabled = await page.$eval(simBCheckboxSelector, el => el.checked);

  result[modem] = {
    'SIM A': isSimAEnabled,
    'SIM B': isSimBEnabled
  };

  return result;
}

(async () => {
//  const browser = await puppeteer.launch({ headless: false });
//  const page = await browser.newPage();

//  await page.goto(process.env.ROUTER_LOGIN_URL);

  // Perform login if necessary
  // await login(page); // Assuming you have a login function

  const cellular1Status = await checkSIMEnabled(page, 'Cellular 1');
  const cellular2Status = await checkSIMEnabled(page, 'Cellular 2');

  const cellularStatus = {
    ...cellular1Status,
    ...cellular2Status
  };

  fs.writeFileSync('config/cellularStatus.json', JSON.stringify(cellularStatus, null, 2));

  await browser.close();
})();
