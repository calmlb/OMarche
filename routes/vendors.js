var express = require('express');
var router = express.Router();
let vendorsCtrl = require("../controllers/vendors");


router.get("/findAllVendors", vendorsCtrl.findAllVendors);
