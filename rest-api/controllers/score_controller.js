const express = require("express");
const scoreBL = require("../buisnessLogic/score_BL");

const router = express.Router();

router.get("/", async (req, res) => {
  const response = await scoreBL.scoreData();
  res.json(response.data);
});

router.post("/", async (req, res) => {
  const response = await scoreBL.updateScore(req.body);
  res.json(response.data);
});

module.exports = router;
