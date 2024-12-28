  const express = require("express");
  const Trend = require("../models/trend");
  const router = express.Router();

  // Get all trends
  router.get("/", async (req, res) => {
    try {
      const trends = await Trend.find().sort({ dateTime: -1 });
      res.json(trends);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch trends." });
    }
  });

  // Trigger Selenium script and save scraped trends
  router.post("/scrape", async (req, res) => {
    const { runSelenium } = require("../selenium");
    try {
      const scrapedTrends = await runSelenium();
      if (!scrapedTrends || scrapedTrends.length === 0) {
        return res.status(500).json({ error: "No trends found." });
      }

      // Save trends to database
      const trend = new Trend({
        trend1: scrapedTrends[0] || "",
        trend2: scrapedTrends[1] || "",
        trend3: scrapedTrends[2] || "",
        trend4: scrapedTrends[3] || "",
        trend5: scrapedTrends[4] || "",
        ipAddress: req.ip,
        dateTime: new Date(),
      });

      await trend.save();

      res.json({ message: "Trends scraped and saved successfully.", trend });
    } catch (error) {
      console.error("Error executing Selenium script:", error);
      res.status(500).json({ error: "Failed to execute Selenium script.", details: error.message });
    }
  });

  module.exports = router;
