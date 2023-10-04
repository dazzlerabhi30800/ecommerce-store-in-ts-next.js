"use client";
import { useProductStore } from "@/store/ProductStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch } from "react-icons/ai";



export default function Navbar() {
    let [cart, searchString, setSearchString] = useProductStore((state) => [state.cart, state.searchString, state.setSearchString]);
    const [cartLength, setCartLength] = useState<number>(0);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const pathname = usePathname();



    useEffect(() => {
        setCartLength(cart.length);
    }, [cart])



    return (
        <nav className="py-2 px-2 md:px-6 flex justify-between items-center">
            <img src="./logo.svg" alt="shopsy" className="w-auto h-[45px] " />
            {pathname === '/' &&
                <form onClick={(e) => e.preventDefault()} className={`flex items-center ${showSearch && "border-b"} border-gray-400`}>
                    {showSearch &&
                        <input type="text" onChange={(e) => setSearchString(e.target.value)} value={searchString} placeholder="Search Products..." className="bg-transparent px-4 placeholder:text-gray-600 text-black focus:outline-none focus:border-none" />
                    }
                    <button onClick={() => setShowSearch((prev) => !prev)} className="text-xl md:cursor-pointer"><AiOutlineSearch /></button>
                </form>
            }
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
