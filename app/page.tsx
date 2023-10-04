"use client";
import Product from "@/components/Product";
import { useProductStore } from "@/store/ProductStore"
import { useEffect, useState } from "react";


export default function Home() {
  const [products, searchString] = useProductStore((state) => [state.products, state.searchString])
  const [productState, setProductState] = useState<product[]>([]);
  useEffect(() => {
    setProductState(products);
  }, [products]);

  let filteredProducts = productState && productState.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase()));
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 place-items-center gap-4 py-5 px-4">
      {filteredProducts.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </div>
  )
}