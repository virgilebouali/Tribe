import AddItem from "../models/AddItem.js";
import Item from "../models/Items.js";

const createItem = async (req, res) => {
  try {
    const { title, description, city, category, need, postalcode, owner } = req.body;
    const image = req.file ? req.file.filename : null;

    console.log("Req File:", req.file); // Vérifiez si le fichier est correctement traité

    const newItem = new AddItem({
      title,
      description,
      city,
      category,
      need,
      postalcode,
      owner,
      image,
    });

    await newItem.save();

    return res.status(201).json({ message: 'L\'élément a été créé avec succès.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la création de l\'élément.' });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json(items);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des éléments.' });
  }
};

const itemController = {
  createItem,
  getItems,
};

export default itemController;
