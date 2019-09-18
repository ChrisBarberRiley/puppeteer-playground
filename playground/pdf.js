const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto("https://www.bing.com", { waitUntil: "networkidle2" });
    await page.pdf({ path: "./screenshots/bing.pdf", format: "A4" });

    await browser.close();
})();
