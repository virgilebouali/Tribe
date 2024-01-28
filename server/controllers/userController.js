// controllers/userController.js
import User from "../models/User.js";

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

export default findById;
