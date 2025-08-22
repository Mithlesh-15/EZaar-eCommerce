import mongoose, { Schema, Document } from "mongoose";
import { Product } from "./Product.model";
export interface User extends Document {
  username: string;
  email: string;
  password: string;
  city: string;
  pinCode: number;
  ownProduct: Array<Product>;
}

const userSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pinCode: {
    type: Number,
    required: true,
  },
  ownProduct: {
    type: [{ type: Schema.Types.ObjectId, ref: "Product" }],
    default: []
  }
});

const Users = mongoose.models.users || mongoose.model("users", userSchema);
export default Users;
