const StoreCtrl = require("../models/store");

module.exports = {
    CreateNewStore
}

function CreateNewStore(req, res) {

    const store = new Store(req.body);
    store.save().then((store) => {
        console.log(store);
        res.json(store);
    })
    .catch((err) => {
        res.send(err.message);
    });
}
