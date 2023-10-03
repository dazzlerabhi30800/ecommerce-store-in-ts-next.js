"use client";
import { useProductStore } from "@/store/ProductStore";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";



export default function Navbar() {
    let [cart] = useProductStore((state) => [state.cart]);
    const [cartLength, setCartLength] = useState<number>(0);
    useEffect(() => {
        setCartLength(cart.length);
    }, [cart])
    return (
        <nav className="py-2 px-2 md:px-6 flex justify-between items-center">
            <img src="./logo.svg" alt="shopsy" className="w-auto h-[45px] " />
            <div className="links--container text-sm md:text-lg flex gap-4 items-center">
                <Link
                    className="font-medium hover:underline hover:text-gray-600"
                    href="/"
                >
                    Home
                </Link>
                <Link
                    href="/cart"
                    data-cart={cartLength}
                    className={`font-medium cart--btn ${cartLength > 0 && "showCart"
                        } hover:underline hover:text-gray-600`}
                >
                    <AiOutlineShoppingCart />
                </Link>
            </div>
        </nav>
    );
}
