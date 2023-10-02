"use client";
import Product from "@/components/Product";
import { useProductStore } from "@/store/ProductStore"


export default function Home() {
  const [products, cart] = useProductStore((state) => [state.products, state.cart])
  const cartItem = cart.reduce((acc, item) => {
    return acc + item.quantity;
  }, 0)
  console.log(cartItem);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4 place-items-center gap-4 py-5 px-2">
      {products.map((product, index) => {
        return <Product key={index} product={product} />
      })}
    </div>
  )
}
