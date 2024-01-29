// controllers/authController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';
import dotenv from "dotenv";
dotenv.config();

const jwtSecret = process.env.JWT;



const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        // Hasher le mot de passe avec bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({ username, email, password: hashedPassword });
        const savedUser = await newUser.save();

        // Générer un JWT
        const token = jwt.sign({ userId: savedUser._id }, process.env.SECRET);
        console.log(token)
        res.status(201).json({ success: true, user: savedUser, token });
    } catch (error) {
        console.error('Erreur d\'inscription:', error);
        res.status(500).json({ success: false, error: 'Erreur d\'inscription' });
    }
    
};

const login = async (req, res) => {




    
    try {

        let token = null;

        const { email, password } = req.body;

        // Trouver l'utilisateur par e-mail dans la base de données
        const user = await User.findOne({ email });
        console.log(user)

        if (!user) {
            return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' });
        }

        // Comparer le mot de passe fourni avec le mot de passe haché dans la base de données
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const jwtOptions = {
                expiresIn: "24h", // Durée de validité du JWT
              };
            // Générer un JWT
            const token = jwt.sign({ userId: user._id }, jwtSecret, { expiresIn: "24h" });
            console.log(token)

            console.log('Connexion réussie:', user);
            res.status(200).json({ success: true, user, token });
            // Vous pouvez également générer un jeton JWT ici si vous utilisez l'authentification basée sur les tokens.
        } else {
            console.error('Mot de passe incorrect');
            res.status(401).json({ success: false, error: 'Mot de passe incorrect' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion:', error);
        res.status(500).json({ success: false, error: 'Erreur lors de la connexion' });
    }
};

export { register, login };
