async function clickClearButton(page) {
    try {
        // Wait for the "Clear" button to be visible
        await page.waitForSelector('button.band_selection_action', { visible: true, timeout: 10000 });

        // Scroll the "Clear" button into view if necessary
        await page.evaluate(() => {
            const clearButton = document.querySelector('button.band_selection_action');
            if (clearButton) {
                clearButton.scrollIntoView();
            }
        });

        // Click the "Clear" button
        await page.click('button.band_selection_action');
        console.log('Clicked "Clear" button successfully!');
    } catch (e) {
        console.error('Failed to click "Clear" button:', e);
    }
}

module.exports = clickClearButton;
