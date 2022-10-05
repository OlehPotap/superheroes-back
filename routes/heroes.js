const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello");
});
router.post("/", () => {});
router.patch("/:id", () => {});
router.delete("/:id", () => {});

module.exports = {
  router,
};
