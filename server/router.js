import { Router } from "express";


import express from "express";
import { register, login } from "./controllers/authController.js";
import { findById, updateProfileImage, getUserItems } from "./controllers/userController.js";
import itemController from "./controllers/itemController.js";
import multer from "multer";
import { v4 as uuidv4 } from "uuid";
import path from "path";
import verifyJwtToken from "./middlewares/verifyJwtToken.js";
import { verify } from "crypto";

const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Utilisez des barres obliques inverses doubles pour échapper aux caractères d'échappement
    cb(null, 'C:\\Users\\1337\\socialmern2024\\client\\socialmedia\\public');
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


router.post("/register", upload, register);
router.post("/login",  login);

// Route pour envoyer le formulaire sans télécharger l'image
router.post("/additem", upload, itemController.createItem);
router.get("/items", itemController.getItems);

router.delete('/items/:id', itemController.deleteItem);

// Route pour télécharger l'image séparément
router.post('/uploadfile', upload)
router.get('/user/:userId/items', verifyJwtToken, getUserItems)
router.patch('/user/:userId/uploadprofilpicture', verifyJwtToken, upload, updateProfileImage)
router.get("/user/:userId", verifyJwtToken, findById);

export default router;
