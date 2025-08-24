"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UserDropDown from "./UserDropDown";
function Navbar() {
  const [has, setHas] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const Call = async () => {
      try {
        const res = await axios.get("/api/isLoggedin");
        setHas(res.data.has);
      } catch (err) {
        console.error("Error:", err);
      }
    };

    Call();
  }, []); // [] daalna important hai warna har render pe call hoga

  return (
    <>
      <div className="border-b-1 px-6 flex justify-between items-center w-full h-[10vh]">
        <Image src="/logoWith.png" width={100} height={100} alt="Logo" />
        <div className="font-bold flex justify-around w-[40%]">
          <Link
            href="/"
            className={`${path === "/" ? "text-blue-800" : "text-black"}`}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`${
              path === "/product" ? "text-blue-800" : "text-black"
            }`}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className={`${
              path === "/contact" ? "text-blue-800" : "text-black"
            }`}
          >
            Contact
          </Link>
        </div>
        <div className="flex justify-around items-center w-[10%]">
          <Link href="/cart">
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          {has ? (
            <UserDropDown />
          ) : (
            <Link
              href="/log-in"
              className="bg-blue-400 text-center p-2 w-2/4 font-semibold hover:bg-blue-500 rounded-3xl"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
