"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";
interface Pro {
  _id: string;
  imageUrl: string;
  productName: string;
  price: number;
  totalStock: number;
  availableStock: number;
  category: string;
  description: string;
}
function Product() {
  const [filterValue, setFilterValue] = useState("All")
  const [Product, setProduct] = useState<Pro[]>([]);
  const fetchData = useCallback( async () => {
    const res = await axios.post("/api/get-all-product",{filterValue});
    if (res.data.allProduct === undefined) return;
    setProduct(res.data.allProduct);
  },[filterValue])
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <>
      <Navbar />
      <div className="p-5 flex justify-end">
      <select onChange={(e)=>{setFilterValue(e.target.value)}} className="outline-1 rounded p-2">
        <option value="All">All</option>
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
      <div className="py-4 px-10 flex flex-wrap gap-6">
        {Product.length > 0
          ? Product.map((item) => (
              <ProductCard
                key={Math.random()}
                id={item._id}
                imageUrl={item.imageUrl}
                productName={item.productName}
                price={item.price}
                availableStock={item.availableStock}
                category={item.category}
                description={item.description}
                owner={false}
              />
            ))
          : "No Product"}
      </div>
      <Footer />
    </>
  );
}

export default Product;
