const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto("http://www.google.com");

    page.on("dialog", async dialog => {
        console.log(dialog.message());
        await dialog.dismiss();
    });

    await page.evaluate(() => alert("This message is inside an alert box"));
    await browser.close();
})();
