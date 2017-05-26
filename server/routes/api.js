const express = require('express');
const sysinfo = require('systeminformation');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/info', (req, res) => {
  return sysinfo.cpu()
    .then(data => console.log(data))
    .catch(error => console.error(error));
});

module.exports = router;