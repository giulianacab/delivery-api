import { Schema, model } from "mongoose";

const orderSchema = new Schema({

    client: { type: String, required: true },
    order: { type: Number, required: true },
    meal: {type: String, enum: ["Frango Assado", "Lasanha", "Salada de Tomate", "Sopa de cebola", "Pudim", "Café"], required: true},
    quantity: { type: Number, required: true },
    price: { type: Number, required: true }
});

const OrderModel = model("Order", orderSchema);

export { OrderModel };