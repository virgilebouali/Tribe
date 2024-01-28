import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";  // Importez le module cors
import dotenv from "dotenv";
import multer from "multer";
import helmet from "helmet";
import morgan from "morgan";
import path, { dirname } from "path";
import { fileURLToPath } from "url";
import router from "./router.js";
import fs from "fs"
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config();
const app = express();

app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
  

app.use(express.json());
app.use(router);
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ extended: true }));
// Utilisez cors comme middleware

app.use('/uploads', express.static('uploads'));
app.use('/assets', express.static(path.join(__dirname, 'public/assets')));



const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
});
