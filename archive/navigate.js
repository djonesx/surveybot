async function navigateToCellular1(page) {
    // Wait for the "Cellular 1" link to be visible and click it
    const links = await page.$$('.wan_status.conn_name.details_action');
    for (let link of links) {
        const text = await page.evaluate(el => el.textContent, link);
        if (text.trim() === 'Cellular 1') {
            await link.click();
            console.log('Clicked "Cellular 1" link successfully!');
            break;
        }
    }
}

module.exports = navigateToCellular1;  // Ensure the navigateToCellular1 function is properly exported
