import express from "express";
import { register, login } from "./controllers/authController.js";
import findById from "./controllers/userController.js";
import itemController from "./controllers/itemController.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(new Error("Seuls les fichiers image sont autorisés."), false);
  }
};

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: { fileSize: 10000000000 },
}).single("image");

router.post("/register", register);
router.post("/login", login);

// Route pour envoyer le formulaire sans télécharger l'image
router.post("/additem", upload, itemController.createItem);
router.get("/items", itemController.getItems);

// Route pour télécharger l'image séparément
router.post('/uploadfile', upload, (req, res, next) => {
  const file = req.file;
  console.log(file);
  if (!file) {
    const error = new Error('Veuillez télécharger un fichier');
    error.httpStatusCode = 400;
    return next(error);
  }
  res.send(file);
});

router.get("/user/:userId", findById);

export default router;
