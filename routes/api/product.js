const express = require('express');
const router = express.Router();
const productCtrl = require('../../controllers/product');


router.get('/', productCtrl.getProducts);
router.get('/:id', productCtrl.showProduct);
router.post('/', productCtrl.createProduct);
router.delete('/:id', productCtrl.deleteProduct);
router.put('/:id', productCtrl.updateProduct);


module.exports = router;
