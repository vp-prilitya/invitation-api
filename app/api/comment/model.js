module.exports = (sequelize, Sequelize) => {
  const Comments = sequelize.define("comments", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    message: {
      type: Sequelize.STRING,
    },
  });
  return Comments;
};
