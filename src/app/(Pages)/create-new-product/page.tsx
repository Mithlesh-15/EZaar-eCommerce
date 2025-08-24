"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function CreateNewProduct() {
  const path = usePathname();
  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] ">
        <div className="h-full w-[30vh] flex flex-col items-center py-5 font-bold gap-9 border-r-2 ">
          <Link
            className={path === "/my-account" ? "text-blue-800" : "text-black"}
            href="/my-account"
          >
            My Account
          </Link>
          <Link
            className={
              path === "/create-new-product" ? "text-blue-800":"text-black" 
            }
            href="/create-new-product"
          >
            Create New Product
          </Link>
        </div>
      </div>
    </>
  );
}

export default CreateNewProduct;
