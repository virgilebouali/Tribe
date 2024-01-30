// controllers/userController.js
import User from "../models/User.js";
import Item from "../models/AddItem.js";
import jwt from "jsonwebtoken"
import multer from "multer";
import path from 'path';
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT;


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



const getUserItems = async (req, res) => {
  try {
    // Extraction du token JWT à partir de l'en-tête Authorization
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({ error: 'Token JWT manquant.' });
    }

    // Vérification du jeton JWT et récupération de l'ID de l'utilisateur
    const decoded = jwt.verify(token, process.env.JWT);
    const userId = decoded.userId;
    // Recherche de l'utilisateur dans la base de données
    const user = await User.findById(userId);
    if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé.' });
    }

    // Utilisation de Mongoose pour récupérer les éléments de l'utilisateur basés sur la propriété owner
    const userItems = await Item.find({ owner: userId });
 console.log(userItems)
    // Envoyer les éléments de l'utilisateur en tant que réponse
    res.status(200).json({ userItems });
  } catch (error) {
    console.error('Erreur lors de la récupération des éléments de l\'utilisateur :', error);
    res.status(500).json({ error: 'Erreur interne du serveur.' });
  }
};






const updateProfileImage = async (req, res) => {
  try {
    const userId = req.params.userId;
    const profilePicturePath = req.file.path;

    // Update the user's profile picture in the database
    const updatedUser = await User.findByIdAndUpdate(userId, { image: profilePicturePath }, { new: true });

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: 'User not found' });
    }

    res.status(200).json({ success: true, message: 'Profile picture updated successfully', user: updatedUser });
  } catch (error) {
    console.error('Error updating profile picture:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};


export { findById, updateProfileImage, getUserItems };
