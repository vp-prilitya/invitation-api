const express = require("express");
const router = express();
const { find, create } = require("./controller");

router.get("/comments", find);
router.post("/comments", create);

module.exports = router;
