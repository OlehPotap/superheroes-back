const mongoose = require("mongoose");

const hero = mongoose.Schema({
  nickname: {
    type: String,
    required: true,
  },
  real_name: {
    type: String,
    default: "The hero's identity has yet to be revealed.",
  },
  origin_description: {
    type: String,
    default: "Nothing is known about the hero yet",
  },
  superpowers: {
    type: [String],
    default: "Hero's abilities are still unknown",
  },
  catch_phrase: {
    type: [String],
    default:
      "Hero doesn't really talk (thinks he is some kind of hot shit or something)",
  },
  images: [String],
});

const Hero = mongoose.model("heroes", hero);

module.exports = {
  Hero,
};
