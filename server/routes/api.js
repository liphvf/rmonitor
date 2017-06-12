const express = require('express');
// const sysinfo = require('systeminformation');
const router = express.Router();
const os = require("os");

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// router.get('/info', (req, res) => {
//   return sysinfo.cpu()
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// });

// router.get('/info/memory', (req, res) => {
  
//   // let memoryAtual  = (os.freemem() / 1024) / 1024;
//   // return {memoria: memoryAtual};
//   return res.json({"foo": "bar"});
// });

router.get('/info/memory', function(req, res) {

  let memory = (os.freemem() / 1024) / 1024;
  
    res.json({ memory:  memory.toFixed(0) + " MB" });   
});

module.exports = router;