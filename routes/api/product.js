const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/product');


router.get('/', productCtrl.getProducts);
router.get('/:id', productCtrl.showProduct);
router.get('/', productCtrl.createProduct);
router.get('/:id', productCtrl.deleteProduct);
router.get('/:id', productCtrl.updateProduct);


module.exports = router;
