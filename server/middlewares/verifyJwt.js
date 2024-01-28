// middleware/verifyJwt.js
import jwt from "jsonwebtoken";

const jwtSecret = process.env.SECRET;

function verifyJwtToken(req, res, next) {
  // Récupérer le token client depuis l'en-tête 'Authorization' de la requête
  const token = req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Si le token n'existe pas, envoyer une erreur
  if (!token) {
    return res.status(401).json({ "error": "Token manquant. Accès non autorisé." });
  } else {
    try {
      // Vérifier que le token est correct avec la clé secrète
      const decoded = jwt.verify(token, jwtSecret);

      // Ajouter l'ID de l'utilisateur à l'objet req
      req.userId = decoded.userId;

      // Passer à la prochaine étape (route ou middleware)
      next();
    } catch (error) {
      // Si le token n'est pas valide, envoyer une erreur
      return res.status(401).json({ error: "Token invalide. Accès non autorisé." });
    }
  }
}

export default verifyJwtToken;
