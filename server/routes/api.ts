import * as express from "express";
import * as si from "systeminformation";

const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/info', function (req, res) {
  var info = {
      memory: {}
  };

    si.mem(function (data) {
      // console.log('CPU-Information:')
      // console.log(data)
      info.memory = data;
    });
   
  });

  module.exports = router;