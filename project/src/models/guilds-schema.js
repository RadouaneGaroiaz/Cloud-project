const { Schema, model } = require("mongoose");

module.exports = model(
  "guildsInfo",
  new Schema({
    guildid: {
      type: String,
      required: true,
    },
    guildname: {
      type: String,
      required: true,
    }

  })
);
