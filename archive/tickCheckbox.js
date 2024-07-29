async function tickCheckbox(page) {
    try {
        // Wait for the checkbox to be visible
        await page.waitForSelector('input[type="checkbox"][name="band_list"][value="LTE_B1"]', { visible: true, timeout: 10000 });

        // Tick the checkbox
        await page.evaluate(() => {
            const checkbox = document.querySelector('input[type="checkbox"][name="band_list"][value="LTE_B1"]');
            if (checkbox && !checkbox.checked) {
                checkbox.click();
            }
        });

        console.log('Ticked the checkbox successfully!');
    } catch (e) {
        console.error('Failed to tick the checkbox:', e);
    }
}

module.exports = tickCheckbox;
