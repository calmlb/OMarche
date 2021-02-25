const Vendors = require("../models/store");

module.exports = {
    findAllVendors
}

async function findAllVendors(req, res) {
    try {
        const allVendors = await Vendors.find({});
        res.send({ vendors: allVendors });
    } catch (err) {
        res.send({ message: err.message, response: false });
    }
}
