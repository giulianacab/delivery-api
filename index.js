import express from "express";
import * as dotenv from "dotenv";
import { dbConnect } from "./config/db.config.js";

import { consumerRouter } from "./routes/consumer.routes.js"
import { restaurantRouter } from "./routes/restaurant.routes.js";
import { orderRouter } from "./routes/order.routes.js"
import { mealRouter } from "./routes/meal.routes.js";

dotenv.config();
dbConnect();


const app = express();

app.use(express.json());


app.use("/restaurant", restaurantRouter);
app.use("/order", orderRouter)
app.use("/meal", mealRouter);
app.use("/consumer", consumerRouter);

app.listen(Number(process.env.PORT), () => {
  console.log(`Server running ok at port ${process.env.PORT}`);
});
