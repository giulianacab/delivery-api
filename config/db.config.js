import mongoose from "mongoose";

export async function dbConnect() {
  try {
    const dbConnection = await mongoose.connect(process.env.MONGODB_URI);

    console.log(`Connected to db: ${dbConnection.connection.name}`);
  } catch (err) {
    console.error(err);
  }
}