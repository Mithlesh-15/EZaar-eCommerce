'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import axios from "axios";
import React, { useEffect, useState } from "react";
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
  const [Product, setProduct] = useState<Pro[]>([])
  const fetchData = async () => {
  const res = await axios.get('/api/get-all-product')
  setProduct(res.data.allProduct)
  };
  useEffect(()=>{
fetchData()
  },[])
  return (
    <>
      <Navbar />
      <div className="py-4 px-10 flex flex-wrap gap-6">
        {Product.length>0 && Product.map((item) => (
                    <div key={Math.random()}>
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
                  ))}
        <Footer />
      </div>
    </>
  );
}

export default Product;
