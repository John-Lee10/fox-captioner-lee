const { Golfer } = require("../models");

async function golferData(req, res) {
    res.render(Golfer.selectGolfer)
}

module.exports = {golferData};