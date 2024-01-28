// controllers/authController.js
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

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
        const { email, password } = req.body;

        // Trouver l'utilisateur par e-mail dans la base de données
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ success: false, error: 'Utilisateur non trouvé' });
        }

        // Comparer le mot de passe fourni avec le mot de passe haché dans la base de données
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            // Générer un JWT
            const token = jwt.sign({ userId: user._id }, 'votre_clé_secrète');

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
