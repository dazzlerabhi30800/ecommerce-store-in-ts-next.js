"use client";
import CartComp from "@/components/CartComp";
import { useProductStore } from "@/store/ProductStore";
import { useEffect, useState } from "react";

export default function Page() {
  const [cart] = useProductStore((state) => [state.cart]);
  const [cartState, setCartState] = useState<product[]>([]);
  useEffect(() => {
    setCartState(cart);
  }, [cart])
  return (
    <div className="cart-page p-4 text-center flex flex-col gap-4 ">
      <h1>Cart Items : {cart.length}</h1>
      <div className="flex flex-col gap-4 items-center p-4">
        {cartState.map((item, index) => (
          <CartComp key={index} cart={item} />
        ))}
      </div>
    </div>
  );
}
