const express = require('express');
// const sysinfo = require('systeminformation')
const router = express.Router();
const os = require('os');
var si = require('systeminformation');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var getInfo = new Promise(function (resolve, reject) {
  resolve;
});

router.get('/info', function (req, res) {
  var info = {};

  si.mem().then(data => {
    info.Memory = data;
    si.currentLoad().then(cpu => {
      info.CpuLoad = cpu;
      // si.currentLoad().then()
      res.json(info);
    });
  });
});

module.exports = router;
