import bdd from "../config/bdd.js";

// Obtenir toutes les recettes
export const getAllRecipes = async () => {
    const getAllRecipes = 
    "SELECT id_recipe, categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, created_at_recipe FROM recipes";

    const [response] = await bdd.query(getAllRecipes);
    return response;
};

// Obtenir une recette par ID
export const getRecipeById = async (id) => {
    const getRecipeById = 
    "SELECT id_recipe, categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, created_at_recipe FROM recipes WHERE id_recipe = ?";

    const [response] = await bdd.query(getRecipeById, [id]);
    return response;
};  

// Créer une nouvelle recette
export const createRecipe = async (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, created_at_recipe) => {
    const createRecipe = 
    "INSERT INTO recipes (categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, created_at_recipe) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    
    const [response] = await bdd.query(createRecipe, [categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, created_at_recipe]);
    return response;
};

// Mettre à jour une recette existante
export const updateRecipe = async (id_recipe, categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time) => {
    const updateRecipe = 
    "UPDATE recipes SET categorie_id = ?, title_recipe = ?, description = ?, instructions = ?, image_png = ?, preparation_time = ?, cooking_time = ? WHERE id_recipe = ?";

    const [response] = await bdd.query(updateRecipe, [categorie_id, title_recipe, description, instructions, image_png, preparation_time, cooking_time, id_recipe]);
    return response;
};

// Supprimer une recette
export const deleteRecipe = async (id_recipe) => {
    const deleteRecipe = 
    "DELETE FROM recipes WHERE id_recipe = ?";

    const [response] = await bdd.query(deleteRecipe, [id_recipe]);
    return response;
};  

export default {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};