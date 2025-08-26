"use client";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
interface Pro {
  _id:string;
  imageUrl: string;
  productName: string;
  price: number;
  totalStock: number;
  availableStock: number;
  category: string;
  description: string;
}
function MyAccount() {
  const path = usePathname();
  const [allProducts, setAllProducts] = useState<Pro[]>([]);
  const fatchData = async () => {
    const res = await axios.get("/api/my-product-data");
    setAllProducts(res.data.allProduct);
    console.log(res);
  };
  useEffect(() => {
    fatchData();
  }, []);
  return (
    <>
      <Navbar />
      <div className="w-full min-h-screen flex flex-col md:flex-row">
        <div className="w-full md:w-[13vw] h-[17vh] md:h-full flex flex-col items-center py-5 font-bold gap-6 border-b-2 md:border-b-0 md:border-r-2">
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
        <div className="w-full h-[80vh] md:h-full flex justify-center md:justify-start p-10 gap-6 flex-wrap overflow-auto">
          {allProducts.length > 0 ? 
          `${
          allProducts.map(item => {
            <div key={item._id}>

              <ProductCard
                      imageUrl={item.imageUrl}
                      productName={item.productName}
                      price={item.price}
                      availableStock={item.availableStock}
                      category={item.category}
                      description={item.description}
                      owner={true}
                    />
            </div>
          })
          
          }`
          
          :"No product"}
        </div>
      </div>
    </>
  );
}

export default MyAccount;
