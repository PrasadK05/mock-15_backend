const mongoose = require("mongoose");

let q = new mongoose.Schema({
  category: { type: String, required: true },
  type: { type: String, required: true },
  difficulty: {
    type: String,
    enum: ["easy", "medium", "hard"],
    default: "easy",
  },
  question: { type: String, required: true },
  correct_answer: { type: String, required: true },
  incorrect_answers: [String],
});

let Question = mongoose.model("question", q);

module.exports = Question;
