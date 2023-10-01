"use client";
import { useProductStore } from "@/store/ProductStore"


export default function Home() {
  const [products] = useProductStore((state) => [state.products])
  console.log(products);
  return (
    <div className="flex p-6">
      Hello World
    </div>
  )
}
