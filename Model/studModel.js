const mongoose = require("mongoose");
let defaultImag =
  "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg";

const profileSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: defaultImag,
    },
    bio: {
      type: String,
    },
  },
  { timeStamps: true }
);

const profileModel = mongoose.model("MyProfile", profileSchema);

module.exports = profileModel;
