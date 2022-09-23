import express from "express";
import { RestaurantModel } from "../models/restaurant.model.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/", async (req, res) => {
    try {
      const createdRestaurant = await RestaurantModel.create(req.body);
  
      return res.status(201).json(createdRestaurant);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
});

restaurantRouter.get("/", async (req, res) => {
    try {
      const allRestaurants = await RestaurantModel.find();
  
      return res.status(200).json(allRestaurants);
    } catch (error) {
      console.log(error);
  
      return res.json(error);
    }
});

restaurantRouter.get("/:id", async (req, res) => {
    try {
      const restaurant = await RestaurantModel.findOne({ _id: req.params.id });
  
      return res.status(200).json(restaurant);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
});

restaurantRouter.put("/:id", async (req, res) => {
    try {
      const editRestaurant = await RestaurantModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true, runValidators: true }
      );
  
      return res.status(200).json(editRestaurant);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
});

restaurantRouter.delete("/:id", async (req, res) => {
    try {
      const deletedRestaurant = await RestaurantModel.deleteOne({ _id: req.params.id });
  
      return res.status(200).json(deletedRestaurant);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
});

export { restaurantRouter };