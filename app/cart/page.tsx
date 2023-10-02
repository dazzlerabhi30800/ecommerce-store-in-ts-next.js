"use client";

import { useProductStore } from "@/store/ProductStore";

export default function Page() {
  const [cart] = useProductStore((state) => [state.cart]);
  console.log(cart);
  return <div className="cart-page p-4 flex flex-col gap-4 justify-center">
    {cart.map((item, index) => (
      <div key={index}>{index}</div>
    ))}
  </div>;
}
