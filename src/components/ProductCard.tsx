"use client";
import Image from "next/image";
import { ShoppingCart, Trash } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";

type ProductType = {
  id: string;
  imageUrl: string;
  productName: string;
  price: number;
  availableStock: number;
  category: string;
  description: string;
  owner: boolean;
};

export default function ProductCard({
  id,
  imageUrl,
  productName,
  price,
  availableStock,
  category,
  description,
  owner,
}: ProductType) {
  const addToCart = async () => {
    const cart = JSON.parse(localStorage.getItem("allProductInCart") || "[]");
    interface CartItem {
      productId: string;
      count: number;
    }
    const newItem = { productId: id, count: 1 };

    // purane cart me item already hai kya?
    const exist = cart.find((item: CartItem) => item.productId === id);

    if (exist) {
      exist.count += 1;
    } else {
      cart.push(newItem);
    }
    localStorage.setItem("allProductInCart", JSON.stringify(cart));
    toast.success("Product added to cart!");
  };
  const deleteProduct = async () => {
    await axios.post("/api/delete", { id });
    window.location.reload();
  };
  return (
    <div className="w-[300px] bg-white rounded-xl shadow-md p-5 flex flex-col gap-4 border-1">
      {/* Category */}
      <span className="bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-md w-fit">
        {category}
      </span>

      {/* Product Image */}
      <div className="flex justify-center">
        <Image
          src={imageUrl} // apna image yaha dalna
          alt={productName}
          width={200}
          height={200}
          className="object-contain"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-xl font-bold">{productName}</h2>

      {/* Description */}
      <p className="text-gray-600 text-sm">{description}</p>

      {/* Price Section */}
      <div className="flex items-center gap-3">
        <span className="text-lg font-bold text-gray-900">₹{price}</span>
        <span className="text-gray-400 line-through">₹{price + 399}</span>
      </div>

      {/* Stock Info */}
      <p className="text-sm text-gray-600">
        Total Stocks Available:{" "}
        <span className="font-medium">{availableStock}</span>
      </p>

      {/* Add To Cart Button */}
      {owner ? (
        <button
          onClick={deleteProduct}
          className="mt-3 flex items-center justify-center gap-2 bg-red-700 text-white px-4 py-2 rounded-lg shadow hover:bg-red-900 transition"
        >
          <Trash size={18} />
          Delete
        </button>
      ) : (
        <button
          onClick={addToCart}
          className="mt-3 flex items-center justify-center gap-2 bg-black text-white px-4 py-2 rounded-lg shadow hover:bg-gray-800 transition"
        >
          <ShoppingCart size={18} />
          Add To Cart
        </button>
      )}
    </div>
  );
}
