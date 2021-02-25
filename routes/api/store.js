const express = require('express');
const router = express.Router();
const storeCtrl = require('../../controllers/store');


router.get('/', storeCtrl.getStores);
router.get('/:id', storeCtrl.showStore);
router.get('/userstore/:id', storeCtrl.userStore);
router.post('/', storeCtrl.createStore);
router.delete('/:id', storeCtrl.deleteStore);
router.put('/:id', storeCtrl.updateStore);


module.exports = router;
