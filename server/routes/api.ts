import { express } from "express";

// const sysinfo = require('systeminformation');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

module.exports = router;