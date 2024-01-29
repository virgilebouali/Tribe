
import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT;

function verifyJwtToken(req, res, next) {
  // Recupere le token client depuis de header 'Authorization' de la requete
  const token =
    req.headers.authorization && req.headers.authorization.split(" ")[1];

  // Si le token n'existe pas on envoie une erreur
  if (!token) {
    return res
      .status(401)
      .json({ "error": "Token manquant. Accès non autorisé." });
  }
  // si il existe, on continue
  else {
    try {
      // On verifie que le token soit correct avec la cle
      const decoded = jwt.verify(token, jwtSecret);
      // Ajoute l'ID de l'utilisateur à l'objet req
      req.userId = decoded.userId;

      // Passe à la prochaine étape (route ou middleware)
      next();
    } catch (error) {
      // Si le token n'est pas bon on envoie une erreur
      return res
        .status(401)
        .json({ error: "Token invalide. Accès non autorisé." });
    }
  }
}

export default verifyJwtToken;
