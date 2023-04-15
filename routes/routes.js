const express= require('express');
const router = express.Router();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const {getsample,addsample,updatesample,deletesample}=require('../controller/controller')
router.get('/',getsample);
router.post('/add',jsonParser, addsample);
router.put('/:id', jsonParser,updatesample);
router.delete('/delete/:id',jsonParser,deletesample);
module.exports=router;