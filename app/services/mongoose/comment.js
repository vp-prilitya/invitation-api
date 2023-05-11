const db = require("../../db");
const Comments = db.comment;

const getAllComments = async (req) => {
  const { limit, offset } = getPagination(req.query.offset, req.query.limit);

  const result = await Comments.findAndCountAll({
    limit: limit,
    offset: offset,
    order: [["createdAt", "DESC"]],
  });

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

function getPagination(page, size) {
  const limit = size ? +size : null;
  if (limit) {
    const offset = page ? page * limit : 0;
    return { limit, offset };
  } else {
    const offset = 0;
    return { limit, offset };
  }
}

module.exports = {
  getAllComments,
  createComments,
};
