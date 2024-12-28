const { runSelenium } = require("./selenium");

runSelenium()
  .then((data) => console.log("Selenium executed successfully:", data))
  .catch((error) => console.error("Selenium error:", error));