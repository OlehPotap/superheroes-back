const express = require("express");
const {
  getAllHeroes,
  addHero,
  deleteHero,
  updateHero,
} = require("../controllers/heroes.controller.js");

const router = express.Router();

router.get("/", getAllHeroes);
router.post("/", addHero);
router.patch("/:id", updateHero);
router.delete("/:id", deleteHero);

module.exports = {
  router,
};
