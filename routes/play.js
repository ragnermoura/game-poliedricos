var express = require('express');
var router = express.Router();
var getValuesRoll = require("../util/splitData").GetRollValue

/* GET home page. */
router.post('/', function (req, res, next) {
    var response = getValuesRoll(req.body)
    res.send(response);
});

module.exports = router;