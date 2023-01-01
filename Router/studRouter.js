const express = require("express");
const {
  getProfile,
  newProfile,
  oneProfile,
} = require("../Controller/studController");
const uploader = require("../Config/multer");

const router = express.Router();

router.route("/getall").get(getProfile);
router.route("/getone/:id").get(oneProfile);
router.route("/create").post(uploader, newProfile);

module.exports = router;
