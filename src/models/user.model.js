const mongoose = require("mongoose");

let users = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, default: 0 },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
  category: { type: String, required: true },
  no_ques: { type: Number, required: true },
});

let User = mongoose.model("user", users);

module.exports = User;
