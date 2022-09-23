import { Schema, model } from "mongoose";

const consumerSchema = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    match: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/gm,
  },
   phone: {
    type: Number,
    required: true,
    match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
  },
    address: {   
        type: String, 
        required: true, 
        trim: true, 
        min: 10, 
        max: 100,
     },
    city: {
      type: String, 
        required: true, 
        trim: true, 
        min: 10, 
        max: 100,
    }, 
    uf: {
      type: String, 
        required: true, 
        trim: true, 
        min: 10, 
        max: 100,
    }    
    
});

const ConsumerModel = model("Consumer", consumerSchema);

export { ConsumerModel };