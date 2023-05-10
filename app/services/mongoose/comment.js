const db = require("../../db");
const Comments = db.comment;

const getAllComments = async (req) => {
  const result = await Comments.findAll({ order: [["createdAt", "DESC"]] });

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
