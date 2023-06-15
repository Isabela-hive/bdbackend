const router = require("express").Router();

router.get("/:filename", (req, res) => {
  return res.sendFile(`/${req.params.filename}`, { root: "static" });
});

module.exports = router;
