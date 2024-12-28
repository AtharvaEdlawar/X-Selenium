const mongoose = require("mongoose");

const trendSchema = new mongoose.Schema({
  trend1: { type: String },
  trend2: { type: String },
  trend3: { type: String },
  trend4: { type: String },
  trend5: { type: String },
  dateTime: { type: Date, default: Date.now },
  ipAddress: { type: String },
});

const Trend = mongoose.model("Trend", trendSchema);

module.exports = Trend;
