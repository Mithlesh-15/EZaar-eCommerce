"use client";
import Navbar from "@/components/Navbar";
import axios from "axios";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";

function CreateNewProduct() {
  const path = usePathname();
  const [imageUrl, setImageUrl] = useState("");
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState(0);
  const [totalStock, setTotalStock] = useState(0);
  const [availableStock, setAvailableStock] = useState(0);
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);
  const router = useRouter();
  const submitHandle = async () => {
    setBtnDisable(true);
    await axios.post("/api/create-product", {
      imageUrl,
      productName,
      price,
      totalStock,
      availableStock,
      category,
      description,
    });
    setBtnDisable(false);
    router.push("/my-account");
  };
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-[13vw] h-auto md:h-full flex flex-col items-center py-5 font-bold gap-6 border-b-2 md:border-b-0 md:border-r-2">
          <Link
            className={path === "/my-account" ? "text-blue-800" : "text-black"}
            href="/my-account"
          >
            My Account
          </Link>
          <Link
            className={
              path === "/create-new-product" ? "text-blue-800" : "text-black"
            }
            href="/create-new-product"
          >
            Create New Product
          </Link>
        </div>
        <div className="flex-1 w-full">
          <div className="h-full w-full p-4 sm:p-6">
            <div className="bg-white rounded-xl shadow-lg h-full">
              <div className="p-4 sm:p-8">
                <h1 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">
                  Create New Product
                </h1>
                <p className="text-gray-600 mb-8 text-sm sm:text-base">
                  Add a new product to your inventory
                </p>

                <form className="space-y-6" id="productForm">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="productName"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Product Name *
                      </label>
                      <input
                        type="text"
                        id="productName"
                        name="productName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-2"
                        placeholder="Enter product name"
                        value={productName}
                        onChange={(e) => setProductName(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="imageUrl"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Image URL *
                      </label>
                      <input
                        type="url"
                        id="imageUrl"
                        name="imageUrl"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-2"
                        placeholder="https://example.com/image.jpg"
                        required
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        onClick={() => {
                          if (
                            confirm(
                              "To upload your photo, go to https://postimages.org/ , upload your photo, copy the direct link, and paste it here. \nThank you."
                            )
                          ) {
                            window.open("https://postimages.org/", "_blank");
                          }
                        }}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="price"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Price (₹) *
                      </label>
                      <input
                        type="number"
                        id="price"
                        name="price"
                        min="0"
                        step="0.01"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-2"
                        placeholder="0.00"
                        required
                        value={price}
                        onChange={(e) => setPrice(Number(e.target.value))}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="totalStock"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Total Stock *
                      </label>
                      <input
                        type="number"
                        id="totalStock"
                        name="totalStock"
                        min="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-2"
                        placeholder="0"
                        required
                        value={totalStock}
                        onChange={(e) => setTotalStock(Number(e.target.value))}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="availableStock"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Available Stock *
                      </label>
                      <input
                        type="number"
                        id="availableStock"
                        name="availableStock"
                        min="0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 outline-2"
                        placeholder="0"
                        required
                        value={availableStock}
                        onChange={(e) =>
                          setAvailableStock(Number(e.target.value))
                        }
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="category"
                        className="block text-sm font-semibold text-black-primary mb-2"
                      >
                        Category *
                      </label>
                      <select
                        id="category"
                        name="category"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 bg-white outline-2"
                        required
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option value="">Select a category</option>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing & Apparel</option>
                        <option value="home-garden">Home & Garden</option>
                        <option value="sports">Sports & Outdoors</option>
                        <option value="books">Books & Media</option>
                        <option value="beauty">Beauty & Personal Care</option>
                        <option value="toys">Toys & Games</option>
                        <option value="automotive">Automotive</option>
                        <option value="food">Food & Beverages</option>
                        <option value="health">Health & Wellness</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="description"
                      className="block text-sm font-semibold text-black-primary mb-2"
                    >
                      Product Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200 resize-vertical outline-2"
                      placeholder="Enter detailed product description..."
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full md:w-auto bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 shadow-lg"
                      onClick={submitHandle}
                      disabled={btnDisable}
                    >
                      {btnDisable ? "Processing..." : "Create Product"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateNewProduct;
