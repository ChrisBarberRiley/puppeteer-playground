const puppeteer = require("puppeteer");

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto("https://www.bing.com");

        const dimensions = await page.evaluate(() => {
            return {
                width: document.documentElement.clientWidth,
                height: document.documentElement.clientHeight,
                deviceScaleFactor: window.devicePixelRatio
            };
        });

        console.log("Dimensions", dimensions);

        await browser.close();
    } catch (err) {
        console.log(err);
    }
})();
