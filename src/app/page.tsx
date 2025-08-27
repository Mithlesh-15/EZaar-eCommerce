"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Slide from "@/components/Slide";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";
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
export default function Home() {
  const [data, setData] = useState<Pro[]>([]);
  const fetch = async () => {
    const res = await axios.get("/api/get-product-home");
    setData(res.data.allProduct);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <>
      <Navbar />
      <Slide />
      {/* <div className=" w-full h-auto grid p-10 gap-4 mx-auto lg:grid-cols-3">
        <div className="w-full h-full flex justify-center">
          {data.length > 0
            ? data.map((item) => (
                <div key={Math.random()} className="flex bg-sky-500 w-full h-full">
                  <ProductCard
                    imageUrl={item.imageUrl}
                    productName={item.productName}
                    price={item.price}
                    availableStock={item.availableStock}
                    category={item.category}
                    description={item.description}
                    owner={false}
                  />
                  <ProductCard
                    imageUrl={item.imageUrl}
                    productName={item.productName}
                    price={item.price}
                    availableStock={item.availableStock}
                    category={item.category}
                    description={item.description}
                    owner={false}
                  />
                  <ProductCard
                    imageUrl={item.imageUrl}
                    productName={item.productName}
                    price={item.price}
                    availableStock={item.availableStock}
                    category={item.category}
                    description={item.description}
                    owner={false}
                  />
                </div>
              ))
            : "No Product"}
        </div>
      </div> */}
      <div className="w-full h-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10 mx-auto">
        {data.length > 0 ? (
          data.map((item) => (
              <ProductCard
              key={Math.random()}
                imageUrl={item.imageUrl}
                productName={item.productName}
                price={item.price}
                availableStock={item.availableStock}
                category={item.category}
                description={item.description}
                owner={false}
              />
              
          ))
        ) : (
          <p>No Product</p>
        )}
      </div>

      <div className="w-full h-auto flex justify-center my-3">
        <Link
          href="/product"
          className="bg-blue-600 p-4 rounded-full font-bold"
          prefetch={true}
        >
          See More
        </Link>
      </div>

      <Footer />
    </>
  );
}
