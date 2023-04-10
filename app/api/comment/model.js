const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let commentSchema = Schema(
  {
    name: {
      type: String,
      required: [true, "Nama harus diisi"],
    },
    message: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("Comments", commentSchema);
