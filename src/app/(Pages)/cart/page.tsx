"use client";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import toast from "react-hot-toast";

function Cart() {
  const [totalPrice, setTotalPrice] = useState(1265);
  return (
    <>
      <Navbar />
      {/* all product added in cart */}
      <div className="w-full h-[90vh] relative">
        <div className="">
          
        </div>
        <div className=" w-full h-auto sm:w-[50vh] sm:h-[15vh] border-2 fixed bottom-0 sm:bottom-5 right-0 sm:right-10 p-5 text-center">
          <p className="font-semibold">Total Price : {totalPrice}</p>
          <button
            className="w-auto h-auto bg-black text-white rounded p-2 mt-2"
            onClick={() => {
              toast.success("order placed successfully");
              setTotalPrice(0);
              localStorage.clear();
              setTimeout(() => {
                window.location.href = "/";
              }, 1500);
              
            }}
          >
            Place Order
          </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
