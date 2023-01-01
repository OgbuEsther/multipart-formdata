const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },

  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  const ext = path.extname(file.originalname);
  if (![".jpg", ".png"].includes(ext)) {
    return cb(new Error("unsupported format"));
  }
  cb(null, true);
};

console.log("FIRST", fileFilter);

const imageUpLoader = multer({
  storage: storage,
  fileFilter: fileFilter,
  // limits: {
  //   fileSize: 1024 * 1024 * 2,
  // },
}).single("image");

module.exports = imageUpLoader;
