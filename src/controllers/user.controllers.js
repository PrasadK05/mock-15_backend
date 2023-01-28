const User = require("../models/user.model");

const createUser = async (data) => {
  let { name, score, difficulty, category, no_ques } = data;
  try {
    let user = await User.create({ name, score, difficulty, category, no_ques });
    if (user) {
      return user;
    } else {
      return false;
    }
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  createUser,
};
