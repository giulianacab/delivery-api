import express from "express";
import { MealModel } from "../models/meal.model.js";



const mealRouter = express.Router();

// POST

mealRouter.post("/", async (req, res) => {
    try {
        const createdMeal = await MealModel.create(req.body);
        return res.status(200).json(createdMeal);

    } catch (error) {
        console.log(error);
        return res.json(error)

    }
});


// GET

mealRouter.get("/", async (req, res) => {
    try {
        const allMeals = await MealModel.create(req.body);
        return res.status(200).json(createdMeal);

    } catch (error) {
        console.log(error);
        return res.json(error)

    }
});


// READ DETAILS

mealRouter.get("/:id", async (req, res) => {
    try {
        const meal = await MealModel.findOne({ _id: req.params.id });
        return res.status(200).json(createdMeal);

    } catch (error) {
        console.log(error);
        return res.json(error)

    }
});



// EDIT

mealRouter.put("/:id", async (req, res) => {
    try {
        const editedMeal = await MealModel.findOneAndUpdate(
            { _id: req.params.id },
            { ...req.body },
            { new: true, runValidators: true}
        );
        return res.status(200).json(editedMeal);

    } catch (error) {
        console.log(error);
        return res.json(error)

    }
});


// DELETE

mealRouter.delete("/:id", async (req, res) => {
    try {
        const deletedMeal = await MealModel.deleteOne({ _id: req.params.id });
        return res.status(200).json(deletedMeal);

    } catch (error) {
        console.log(error);
        return res.json(error)

    }
});



export { mealRouter };