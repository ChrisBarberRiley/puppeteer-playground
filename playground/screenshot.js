const config = require("config");
const puppeteer = require("puppeteer");

const domain = config.get("domain");
const image_name = config.get("domain_image_name");

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(domain);
    await page.screenshot({
        path: "./screenshots/" + image_name
    });

    await browser.close();
})();
