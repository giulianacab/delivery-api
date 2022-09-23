import express from "express";
import { OrderModel } from "../models/order.model.js";


const orderRouter = express.Router();

//CREATE
orderRouter.post("/", async (req, res) => {
    try {
      const createdOrder = await OrderModel.create(req.body);
  
      return res.status(201).json(createdOrder);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  });

//READ ALL
orderRouter.get("/", async (req, res) => {
    try {
      const allOrders = await OrderModel.find();
  
      return res.status(200).json(allOrders);
    } catch (error) {
      console.log(error);
  
      return res.json(error);
    }
  });

//READ DETEAILS
orderRouter.get("/:id", async (req, res) => {
try {
    const order = await OrderModel.findOne({_id: req.params.id});

    return res.status(200).json(order);
} catch (error) {
    console.log(error);

    return res.json(error);
}
});

//UPDATE

orderRouter.put("/:id", async (req, res) => {
    try {
      const editOrder = await OrderModel.findOneAndUpdate(
        { _id: req.params.id },
        { ...req.body },
        { new: true, runValidators: true }
      );
  
      return res.status(200).json(editOrder);
    } catch (error) {
      console.log(error);
      return res.json(error);
    }
  });

//DELETE
orderRouter.delete("/:id", async (req, res) => {
    try {
        const deletedOrder = await OrderModel.deleteOne({ _id: req.params.id });

        return res.status(200).json(deletedOrder);
    } catch (error) {
        console.log(error);
        return res.json(error);
    }
});
export { orderRouter };