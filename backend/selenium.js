const { Builder, By, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
require('dotenv').config();
async function runSelenium() {
    const username = process.env.X_USERNAME;
    const password = process.env.X_PASSWORD;
    const email = process.env.X_EMAIL;

    if (!username || !password) {
        console.error("Environment variables X_USERNAME and X_PASSWORD are required.");
        return;
    }

    const driver = await new Builder()
        .forBrowser("chrome")
        .setChromeOptions(new chrome.Options())
        .build();

    try {
        await driver.get("https://x.com/login");

        // Enter username
        await driver.wait(until.elementLocated(By.name("text")), 10000)
            .sendKeys(username);
        
        // Click Next
        await driver.wait(until.elementLocated(By.xpath("//button//span[text()='Next']/parent::*")), 10000);
        await driver.executeScript("arguments[0].click();", await driver.findElement(By.xpath("//button//span[text()='Next']/parent::*")));

        // Handle optional email verification
        if (email) {
            try {
                const emailInput = await driver.wait(until.elementLocated(By.css("[data-testid='ocfEnterTextTextInput']")), 5000);
                await emailInput.sendKeys(email);
                await driver.executeScript("arguments[0].click();", await driver.findElement(By.xpath("//button//span[text()='Next']/parent::*")));
            } catch (e) {
                console.log("Email verification not required.");
            }
        }

        // Enter password
        await driver.wait(until.elementLocated(By.name("password")), 10000)
            .sendKeys(password);
        
        // Click Login
        await driver.executeScript("arguments[0].click();", await driver.findElement(By.xpath("//button//span[text()='Log in']/parent::*")));

        // Wait for login & navigate to explore
        await driver.wait(until.urlContains("home"), 10000);
        await driver.get("https://x.com/explore/tabs/for-you");

        // Scrape trending items
        const trendingItems = await driver.wait(until.elementsLocated(By.css("div[data-testid='trend'], div[data-testid='eventHero']")), 10000);
        const results = [];
        for (let i = 0; i < Math.min(5, trendingItems.length); i++) {
            results.push(await trendingItems[i].getText());
        }
        return results;

    } catch (error) {
        console.error("Selenium error:", error);
    } finally {
        await driver.quit();
    }
}

module.exports = { runSelenium };