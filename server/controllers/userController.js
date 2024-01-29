// controllers/userController.js
import User from "../models/User.js";
import multer from "multer";
import path from 'path';
import dotenv from "dotenv";
dotenv.config();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Utilisez des barres obliques inverses doubles pour échapper aux caractères d'échappement
    cb(null, 'C:\\Users\\1337\\socialmern2024\\client\\socialmedia\\public');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });


const findById = async (req, res) => {
  try {
    // Accéder à l'ID de l'utilisateur à partir des paramètres de la requête
    const userId = req.params.userId;


    // Trouver l'utilisateur par ID dans la base de données
    const result = await User.findById(userId);

    if (result !== null) {
      // Si l'utilisateur est trouvé, renvoyer les données de l'utilisateur
      res.status(200).json(result);
    } else {
      // Si l'utilisateur n'est pas trouvé, envoyer un message d'erreur dans le JSON
      return res
        .status(404)
        .json({ success: false, error: "Utilisateur non trouvé" });
    }
  } catch (error) {
    // En cas d'erreur, renvoyer une réponse d'erreur avec le message
    console.error("Erreur lors de la recherche de l'utilisateur :", error);
    res
      .status(500)
      .json({
        success: false,
        error: "Erreur lors de la recherche de l'utilisateur",
      });
  }
};

const updateProfileImage = async (req, res) => {
  try {
    // Vérifiez si l'utilisateur est authentifié
    if (!req.user || !req.user.id) {
      return res.status(401).json({ error: 'Utilisateur non authentifié.' });
    }

    const userId = req.user.id;
    console.log('Received request to update profile picture for userId:', userId);

    // Utilisation de multer pour gérer l'upload de l'image
    upload.single('profilePicture')(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur lors du traitement de l\'image.' });
      } else if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Une erreur inattendue s\'est produite.' });
      }

      // Si tout se passe bien, mettez à jour le champ profileImage de l'utilisateur dans la base de données
      const imagePath = req.file.path;

      // Utilisez findByIdAndUpdate avec un objet $set pour effectuer une mise à jour partielle
      console.log('user modif:', userId);
      console.log('req.file:', req.file); // Ajout de ce log pour déboguer

      await User.findByIdAndUpdate(userId, { $set: { profilePicture: imagePath } });

      // Renvoyez une réponse appropriée
      res.status(200).json({ message: 'Image de profil mise à jour avec succès.' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la mise à jour de l\'image de profil.' });
  }
};


export { findById, updateProfileImage };
