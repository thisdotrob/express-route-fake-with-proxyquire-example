const router = require('express').Router();

router.get('/example/route/path', (req, res) => {
  res.status(200);
});

module.exports = router;
