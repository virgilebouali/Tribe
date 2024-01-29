import AddItem from "../models/AddItem.js";
import Item from "../models/AddItem.js";

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
    const items = await AddItem.find().populate('owner', 'username');
     // Ajoutez cette ligne pour le débogage
    res.status(200).json(items);
  } catch (error) {
    console.error("Erreur lors de la récupération des éléments :", error);
    res.status(500).json({ error: 'Une erreur s\'est produite lors de la récupération des éléments.' });
  }
};
const deleteItem = async (req, res) => {
  try {
    const itemId = req.params.id; // Récupérez l'ID de la requête
    const deletedItem = await AddItem.findByIdAndDelete(itemId);

    if (!deletedItem) {
      return res.status(404).json({ message: 'L\'élément n\'a pas été trouvé.' });
    }

    return res.status(200).json({ message: 'L\'élément a été supprimé avec succès.' });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'élément :", error);
    return res.status(500).json({ error: 'Une erreur s\'est produite lors de la suppression de l\'élément.' });
  }
};

const itemController = {
  createItem,
  getItems,
  deleteItem 
};

export default itemController;
