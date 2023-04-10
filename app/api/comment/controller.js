const { StatusCodes } = require("http-status-codes");
const {
  getAllComments,
  createComments,
} = require("../../services/mongoose/comment");

const find = async (req, res, next) => {
  try {
    const result = await getAllComments(req);
    res.status(StatusCodes.OK).json({
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await createComments(req);

    res.status(StatusCodes.CREATED).json({
      message: "Success Create Comments!",
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  find,
  create,
};
