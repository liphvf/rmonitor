const express = require('express');
// const sysinfo = require('systeminformation');
const router = express.Router();
const os = require("os");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/info/memory', function(req, res) {

  let memory = (os.freemem() / 1024) / 1024;
  
    res.json({ memory:  memory.toFixed(0) + " MB" });   
});

module.exports = router;