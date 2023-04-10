const Comments = require("../../api/comment/model");

const getAllComments = async (req) => {
  const result = await Comments.find();

  return result;
};

const createComments = async (req) => {
  const { name, message } = req.body;

  const result = await Comments.create({
    name,
    message,
  });

  return result;
};

module.exports = {
  getAllComments,
  createComments,
};
