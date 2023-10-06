"use client";
import CartComp from "@/components/CartComp";
import { useProductStore } from "@/store/ProductStore";
import { handleDiscount, INTEGER_FORMATTER } from "@/utils/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  const [cart] = useProductStore((state) => [state.cart]);
  const [isClient, setIsClient] = useState(false);
  const [cartState, setCartState] = useState<product[]>([]);


  // Hydration problem fix
  useEffect(() => {
    setIsClient(true);
  }, [])





  useEffect(() => {
    setCartState(cart);
  }, [cart])


  // totoal cart item price
  const totalPrice = cartState.reduce((acc, item) => {
    return acc + (handleDiscount(item.price, item.discount) * item.quantity)
  }, 0)

  return (
    <div className="cart-page p-4 text-center flex flex-col gap-4 ">
      <h1 className="font-bold text-2xl">Cart Items : {cartState.length}</h1>
      <div className="flex flex-col gap-4 items-center p-4">
        {isClient && cartState.map((item, index) => (
          <CartComp key={index} cart={item} />
        ))}
      </div>
      <h2 className="font-bold text-xl">Total Price - ${INTEGER_FORMATTER.format(totalPrice)}</h2>
      {cartState.length > 0 &&
        <Link className="text-lg text-white bg-purple-500 w-fit mx-auto p-2 px-4 rounded-md shadow-md  md:hover:bg-sky-500" href="/checkout">Proceed to Checkout</Link>
      }
    </div>
  );
}
