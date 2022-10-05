import mongoose from "mongoose";

const hero = mongoose.Schema({
  nickname: String,
  real_name: String,
  origin_description: String,
  superpowers: [String],
  catch_phrase: String,
  images: [String],
});

const Hero = mongoose.model("heroes", hero);

module.exports = {
  Hero,
};
