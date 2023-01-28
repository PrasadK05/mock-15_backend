require("dotenv").config();
const express = require("express");
const { createUser } = require("../controllers/user.controllers");
const User = require("../models/user.model");
const Question = require("../models/question.model");


const app = express.Router();

app.post("/signup", async (req, res) => {
  let { name, score, difficulty, category, no_ques } = req.body;
  let user = await createUser({ name, score, difficulty, category, no_ques });
  let qs = await Question.find({ category, difficulty }).limit(no_ques);

  if (user && qs) {
    return res.send({
      status: true,      
      data:qs,
      user,
    });
  } else {
    return res.send({ status: false, messege: "something went werong" });
  }
});



module.exports = app;
// {
//   "name":"prasad",
//   "difficulty":"easy",
//   "category":"Sports",
//   "no_ques":5
// }