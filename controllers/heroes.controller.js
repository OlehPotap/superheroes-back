const mongoose = require("mongoose");
const { Hero } = require("../models/hero.js");

const getAllHeroes = async (req, res) => {
  try {
    const allHeroes = await Hero.find();
    res.status(200).json(allHeroes);
  } catch (error) {
    res.status(404).json({ message: error });
  }
};

const addHero = async (req, res) => {
  const body = req.body;
  const newHero = new Hero(body);
  const checkHero = await Hero.exists({
    nickname: newHero.nickname,
  });
  if (checkHero) {
    res.status(409).json({
      message:
        "Looks like you are trying to add a hero who is already exist, if you meant to add an alter ego of the hero from another universe you should specify it",
    });
  } else {
    try {
      await newHero.save();
      res.status(201).json(newHero);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  }
};

const updateHero = async (req, res) => {
  const { id } = req.params;
  const body = req.body;
  try {
    const updatedHero = await Hero.findByIdAndUpdate(id, body);
    res.status(200).json(updatedHero);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const deleteHero = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedHero = await Hero.findByIdAndDelete(id);
    res.status(200).json(deletedHero);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getAllHeroes,
  addHero,
  deleteHero,
  updateHero,
};
