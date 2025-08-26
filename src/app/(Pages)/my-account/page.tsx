"use client";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

function MyAccount() {
  const path = usePathname();
  const fatchData = async ()=>{
        await axios.get("/api/my-product-data")
  }
  useEffect(()=>{
    fatchData()
  })
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
        <ProductCard
                imageUrl="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                productName="kaka ji"
                price={30}
                availableStock={500}
                category="nhi pata"
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non, ut aspernatur quo facere blanditiis.'
                owner={true}
              />

              
      </div>
        
      </div>
    </>
  );
}

export default MyAccount;
