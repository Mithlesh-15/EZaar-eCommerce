"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import UserDropDown from "./UserDropDown";
import { User } from "lucide-react";
function Navbar() {
  const [has, setHas] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const chaek = async () => {
      const res = await axios.get("/api/is-logged-in");
      setHas(res.data.logIn);
      console.log(res.data.logIn);
    };
    chaek();
  }, []);

  return (
    <>
      <div className="border-b-1 flex justify-between items-center w-full h-[10vh] ">
        <div className={"h-full w-[20%] ml-2 flex justify-center items-center"}>
          <Image
            src="/logoWith.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
        </div>
        <div className="font-bold flex justify-around w-[50%] lg:w-[35%]">
          <Link
            href="/"
            className={`${path === "/" ? "text-blue-800" : "text-black"}`}
            prefetch={true}
          >
            Home
          </Link>
          <Link
            href="/product"
            className={`${
              path === "/product" ? "text-blue-800" : "text-black"
            }`}
            prefetch={true}
          >
            Product
          </Link>
          <Link
            href="/contact"
            className={`${
              path === "/contact" ? "text-blue-800" : "text-black"
            }`}
            prefetch={true}
          >
            Contact
          </Link>
        </div>
        <div
          className={
            "flex justify-around items-center w-[20%] mr-1 md:w-[15%] lg:w-[10%] "
          }
        >
          <Link href="/" prefetch={true}>
            <FontAwesomeIcon icon={faCartShopping} />
          </Link>
          {has ? (
            <UserDropDown />
          ) : (
            <Link
              href="/log-in"
              className="bg-blue-400 text-center p-2 w-2/4 font-semibold hover:bg-blue-500 rounded-3xl"
              prefetch={true}
            >
              <User className="w-5 h-5 block sm:hidden" />
              <span className="hidden sm:block">Log In</span>
            </Link>
          )}
        </div>
      </div>
    </>
  );
}

export default Navbar;
