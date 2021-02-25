const Store = require("../models/store");

module.exports = {
    getStores,
    showStore,
    createStore,
    deleteStore,
    updateStore,
    userStore
};

async function userStore(req, res) {
    const store = await Store.findById(req.params.id);
    res.status(200).json(store);
}

async function getStores(req, res) {
    const stores = await Store.find({});
    res.status(200).json(stores);
}

async function showStore(req, res) {
    const store = await Store.findById(req.params.id);
    res.status(200).json(store);
}

async function createStore(req, res) {
    const store = await Store.create(req.body);
    res.status(200).json(store);
}

async function deleteStore(req, res) {
    const deleteAStore = await Store.findByIdAndRemove(req.params.id);
    res.status(200).json(deleteAStore);
}

async function updateStore(req, res) {
    const updateAStore = await Store.findByIdAndUpdate(req.params.id, req.body, {new: true});
    res.status(200).json(updateAStore);
}

