const router = require("express").Router();
const db = require("../db");

router.get("/", async (req, res) => {
  res.send({
    application: "Budalang'i Adage",
    version: 1.0,
    on: new Date(),
    message: "Welcome to the Backend",
  });
});

router.get("/homecarousel", async (req, res) => {
  db.query("select * from home_carousel", function (e, data) {
    if (!e) return res.send(data);
    else return res.status(400).send(e);
  });
});

module.exports = router;
