"use client";
import Product from "@/components/Product";
import { useProductStore } from "@/store/ProductStore"
import { useEffect, useState } from "react";


export default function Home() {
  const [products] = useProductStore((state) => [state.products, state.cart])
  const [productState, setProductState] = useState<product[]>([]);
  useEffect(() => {
    setProductState(products);
  }, [products]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 place-items-center gap-4 py-5 px-2">
      {productState.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </div>
  )
}