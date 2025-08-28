"use client";
import Image from "next/image";
import { ShoppingCart, Trash } from "lucide-react";
import axios from "axios";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

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
  const [showPopup, setShowPopup] = useState(false);
  const [has, sethas] = useState(false)
  const [count, setCount] = useState(1);
  const handleBuy = () => {
    toast.success("Order placed successfully!");
    setShowPopup(false);
  };
  const deleteProduct = async () => {
    await axios.post("/api/delete", { id });
    window.location.reload();
  };
  const login = async()=>{
   const res = await axios.get('/api/is-logged-in')
   sethas(res.data.logIn)
  }
  useEffect(()=>{
    login()
  },[])
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
          className="mt-3 flex items-center justify-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition"
          onClick={() => {
            if(!has) {
              toast.error("Please login first")
              return
            }
            setCount(1);
            setShowPopup(true);
          }}
        >
          <ShoppingCart size={18} />
          Buy
        </button>
      )}
      {(showPopup && has) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div
            className="bg-white rounded-lg shadow-lg w-full max-w-sm p-6 text-center
                    transform transition-transform duration-200 scale-100 sm:scale-100 md:scale-105"
          >
            <h2 className="text-lg sm:text-xl font-bold mb-3">
              Confirm Purchase
            </h2>
            <p className="text-lg sm:text-xl mb-3">
              You want to buy <b>{productName}</b>
            </p>
            <div className=" w-full h-auto p-3">
              <button
                onClick={() => {
                  if (count === 1) return;
                  setCount((prev) => prev - 1);
                }}
                className="border-1 p-1 font-bold mx-5 cursor-pointer text-center"
              >
                -
              </button>

              <span>{count}</span>
              <button
                onClick={() => setCount((prev) => prev + 1)}
                className="border-1 p-1 font-bold mx-5 cursor-pointer text-center"
              >
                +
              </button>
            </div>
            <div className="w-full h-auto p-5">
              <b>Price : ₹</b>
              {price * count}
            </div>
            <label htmlFor="address">Enter Your Full Address</label>
            <textarea name="address" className="border-2 my-4 p-3" placeholder="Enter Address"></textarea>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleBuy}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
              >
                Buy
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
