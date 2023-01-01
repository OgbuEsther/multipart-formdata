const profileModel = require("../Model/studModel");

require("../Config/multer");
let defaultImag =
  "https://thumbs.dreamstime.com/z/default-avatar-profile-icon-vector-unknown-social-media-user-photo-default-avatar-profile-icon-vector-unknown-social-media-user-184816085.jpg";

const newProfile = async (req, res) => {
  try {
    const { name, bio } = req.body;
    const newFile = await profileModel.create({
      name,
      bio: bio ? bio : "the sun is up so wake up",
      image: req.file ? req.file.path : defaultImag,
    });
    res.status(201).json({
      message: "profile created",
      data: newFile,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occurred",
      data: error.message,
    });
  }
};

const getProfile = async (req, res) => {
  try {
    const getFile = await profileModel.find();
    res.status(200).json({
      message: "all data gotten ",
      data: getFile,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occurred",
      data: error.message,
    });
  }
};

const oneProfile = async (req, res) => {
  try {
    const oneFile = await profileModel.findById(req.params.id);
    res.status(200).json({
      message: "single data gotten",
      data: oneFile,
    });
  } catch (error) {
    res.status(400).json({
      message: "an error occurred",
      data: error,
    });
  }
};

module.exports = { newProfile, getProfile, oneProfile };
