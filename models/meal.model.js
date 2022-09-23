import { Schema, model } from "mongoose";

const mealSchema = new Schema({
    ownerOrder: { type: Schema.Types.ObjectId, ref: "Order" },
    ownerRestaurants: { type: Schema.Types.ObjectId, ref: "Restaurants" },
    /* Referenciamos o meal com:
    -> order (porque uma order precisa ter meals);
    -> restaurants (porque os restaurants tem meals no cardápio); */

    name: { type: String, required: true, minLength: 3 },
    price: { type: Number, required: true },
    calories: { type: Number, required: true },
    ingredients: { type: String, required: true },
    description: { type: String, required: true, minLength: 10 },
    servings: { type: String, required: true, default: "Individual" },
    category: { type: String, required: true, enum: ["Entrada", "Prato principal", "Sobremesa", "Bebida"] },
    img: { type: String, default: "https://static.vecteezy.com/system/resources/previews/007/516/169/original/illustration-of-serving-icons-cooks-restaurants-dessert-bowls-free-vector.jpg" }
});

const MealModel = model("Meal", mealSchema);

export { MealModel };

/*Add qualquer coisa só pro commit ir de novo*/