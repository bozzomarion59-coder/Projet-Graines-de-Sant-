import bdd from '../config/bdd.js';

// Ajouter un favori
export const addFavorite = async (user_id, recipe_id) => {
    const addFavorite =
    "INSERT INTO favorites (user_id, recipe_id) VALUES (?, ?)";

    const [response] = await bdd.query(addFavorite, [user_id, recipe_id]);
    return response;
};

// Supprimer un favori
export const deleteFavorite = async (user_id, recipe_id) => {
    const deleteFavorite =
    "DELETE FROM favorites WHERE user_id = ? AND recipe_id = ?";

    const [response] = await bdd.query(deleteFavorite, [user_id, recipe_id]);
    return response;
};

// Obtenir les favoris d'un utilisateur
export const getFavoritesByUserId = async (user_id) => {
    const getFavoritesByUserId =
    `SELECT favorites.recipe_id, recipes.title_recipe, recipes.image_png 
    FROM favorites 
    JOIN recipes 
    ON favorites.recipe_id = recipes.id_recipe 
    WHERE favorites.user_id = ?`;

    const [response] = await bdd.query(getFavoritesByUserId, [user_id]);
    return response;
};
