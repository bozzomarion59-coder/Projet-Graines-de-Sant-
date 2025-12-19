import recipesModel from "../models/recipesModel.js";

// Obtenir toutes les recettes
export const getAllRecipes = async (req, res) => {
    try {   
        const recipes = await recipesModel.getAllRecipes();
        res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Obtenir une recette par ID
export const getRecipeById = async (req, res) => {
    const { id } = req.params;
    try {
        const recipeById = await recipesModel.getRecipeById(id);
        res.status(200).json(recipeById);
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Créer une nouvelle recette
export const createRecipe = async (req, res) => {
    try {
        const { 
            categorie_id, 
            title_recipe, 
            description, 
            instructions, 
            image_png, 
            preparation_time, 
            cooking_time,
            create_at_recipe
        } = req.body;

        const result = await recipesModel.createRecipe(
            categorie_id, 
            title_recipe, 
            description, 
            instructions, 
            image_png, 
            preparation_time, 
            cooking_time,
            create_at_recipe
        );

        res.status(201).json({ message: "Recette créée avec succès", recipeId: result.insertId });
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Mettre à jour une recette existante
export const updateRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { 
            categorie_id, 
            title_recipe, 
            description, 
            instructions, 
            image_png, 
            preparation_time, 
            cooking_time 
        } = req.body;

        await recipesModel.updateRecipe(
            id, 
            categorie_id, 
            title_recipe, 
            description, 
            instructions, 
            image_png, 
            preparation_time, 
            cooking_time
        );

        res.status(200).json({ message: "Recette mise à jour avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

// Supprimer une recette
export const deleteRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        await recipesModel.deleteRecipe(id);
        res.status(200).json({ message: "Recette supprimée avec succès" });
    } catch (error) {
        console.error(error);
        res.status(500).json("une erreur est survenue");
    }
};

export default {
    getAllRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe,
};