"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function MyAccount() {
  const path = usePathname();
  return (
    <>
      <Navbar />
      <div className="w-full h-[90vh] ">
        <div className="w-full md:w-[13vw] h-auto md:h-full flex flex-col items-center py-5 font-bold gap-6 border-b-2 md:border-b-0 md:border-r-2">
    <Link
      className={path === "/my-account" ? "text-blue-800" : "text-black"}
      href="/my-account"
    >
      My Account
    </Link>
    <Link
      className={path === "/create-new-product" ? "text-blue-800" : "text-black"}
      href="/create-new-product"
    >
      Create New Product
    </Link>
  </div>
      </div>
    </>
  );
}

export default MyAccount;
