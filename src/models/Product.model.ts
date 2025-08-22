import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  image: string;
  prouctName: string;
  productDiscription: string;
  productPrice: number;
  availableStock: number;
}

const productSchema: Schema<Product> = new Schema({
  image: {
    type: String,
    require: true,
  },
  prouctName: {
    type: String,
    require: true,
  },
  productDiscription: {
    type: String,
    require: true,
  },
  productPrice: {
    type: Number,
    require: true,
  },
  availableStock: {
    type: Number,
    require: true,
  },
});

const Products =
  mongoose.models.prodects || mongoose.model("products", productSchema);

export default Products;
