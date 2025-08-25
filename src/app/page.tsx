import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";

export default function Home() {
  return (
    <>
      <Navbar />
      <ProductCard
        imageUrl="https://images.unsplash.com/photo-1520209759809-a9bcb6cb3241?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        productName="kaka ji"
        price={30}
        availableStock={500}
        category="nhi pata"
        description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus non, ut aspernatur quo facere blanditiis.'
      />
      <Footer />
    </>
  );
}
