import * as favoritesControllers from "../controllers/favoritesControllers.js";
import express from "express";

const router = express.Router();

router.post("/add", favoritesControllers.addFavorite);
router.delete("/delete", favoritesControllers.deleteFavorite);
router.get("/:user_id", favoritesControllers.getFavoritesByUserId);

export default router;
