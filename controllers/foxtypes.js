const {Foxtypes} = require("../models");

async function renderfox(req, res) {
    Foxtypes.getfoxtypes();
}


module.exports = { renderfox }