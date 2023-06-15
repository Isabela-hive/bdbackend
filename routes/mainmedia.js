const router = require("express").Router();
const db = require("../db");

router.get("/", async (req, res) => {
  db.query("select * from main_media", function (e, data) {
    if (!e) return res.send(data);
    else return res.status(400).send(e);
  });
});

module.exports = router;
