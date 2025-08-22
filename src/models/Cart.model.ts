import mongoose, { Schema, Document } from "mongoose";

export interface Cart extends Document {
  productID: string;
  productQuantity: number;
}
const cartSchema: Schema<Cart> = new Schema({
  productID: String,
  productQuantity: Number,
});

const Carts =
  mongoose.models.carts || mongoose.model("carts", cartSchema);

export default Carts;
