function delay(time) {
    return new Promise(function(resolve) { 
      setTimeout(resolve, time);
    });
  }
  
  async function clickSaveAndApply(page) {
    try {
      // Scroll down to make the "Save and Apply" button visible
      await page.evaluate(() => {
        window.scrollBy(0, window.innerHeight * 3);
      });
  
      // Add a short wait to ensure everything is loaded
      await delay(100); // Wait for 0.1 seconds
  
      // Wait for the button to appear and click it
      await page.waitForSelector('[aria-labelledby="ui-id-12"] .ui-dialog-buttonpane button', { visible: true, timeout: 10000 });
      await page.evaluate(() => {
        document.querySelector('[aria-labelledby="ui-id-12"] .ui-dialog-buttonpane button').click();
      });
  
      console.log('Clicked "Save and Apply" button successfully!');
    } catch (error) {
      console.error('Error in clickSaveAndApply:', error);
      const errorContent = await page.content();
      console.log("Page content on error:\n", errorContent);
    }
  }
  
  module.exports = clickSaveAndApply;
  