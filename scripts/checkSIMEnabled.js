async function checkSIMEnabled(page, modem) {
  const result = {};
  
  // Navigate to the relevant page if necessary
  // await page.goto('URL_OF_THE_PAGE');

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
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  
  // Login if necessary
  // await login(page);

  const cellular1Status = await checkSIMEnabled(page, 'Cellular 1');
  const cellular2Status = await checkSIMEnabled(page, 'Cellular 2');

  const cellularStatus = {
    ...cellular1Status,
    ...cellular2Status
  };

  fs.writeFileSync('config/cellularStatus.json', JSON.stringify(cellularStatus, null, 2));

  await browser.close();
})();
