import * as favoritesControllers from "../controllers/favoritesControllers.js";
import express from "express";

const router = express.Router();

// Ajouter un favori
router.post("/add", favoritesControllers.addFavorite);

// Supprimer un favori
router.delete("/delete", favoritesControllers.deleteFavorite);

// Obtenir les favoris d'un utilisateur
router.get("/:user_id", favoritesControllers.getFavoritesByUserId);

export default router;
