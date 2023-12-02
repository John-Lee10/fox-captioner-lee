const db = require("../config/connection");

async function getfoxtypes(){
const [rows] = await db.query('SELECT * FROM foxtypes;')
return rows
}

module.exports = {
    getfoxtypes
}