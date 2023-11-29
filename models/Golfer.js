const db = require("../config/connection");

//select Golfer data
async function selectGolfer() {
    const rows  = await db.query(`
      SELECT * FROM golfers 
    `);
    res.json(rows);
}

module.exports = {
    selectGolfer
  };
