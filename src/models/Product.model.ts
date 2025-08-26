import mongoose, { Schema, Document } from "mongoose";

export interface Product extends Document {
  imageUrl: string;
  productName: string;
  price: number;
  totalStock: number;
  availableStock: number;
  category: string;
  description: string;
}

const productSchema: Schema<Product> = new Schema({
  imageUrl:{
    type:String,
    required:true
  },
  productName:{
    type:String,
    required:true
  },
  price:{
    type:Number,
    required:true
  },
  totalStock:{
    type:Number,
    required:true
  },
  availableStock:{
    type:Number,
    required:true
  },
  category:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  }
});

const Products =
  mongoose.models.prodects || mongoose.model("prodects", productSchema);

export default Products;
