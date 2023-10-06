"use client";
import { useProductStore } from "@/store/ProductStore";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShoppingCart, AiOutlineSearch, AiOutlineHome } from "react-icons/ai";



export default function Navbar() {
    let [cart, searchString, setSearchString] = useProductStore((state) => [state.cart, state.searchString, state.setSearchString]);
    const [cartLength, setCartLength] = useState<number>(0);
    const [showSearch, setShowSearch] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const pathname = usePathname();



    useEffect(() => {
        setCartLength(cart.length);
    }, [cart])



    useEffect(() => {
        if (inputRef.current && showSearch) {
            inputRef.current.focus();
        }
    }, [showSearch])



    const handleShowSearch = () => {
        setShowSearch(prev => !prev);
    }


    return (
        <nav className="py-2 px-2 md:px-6 flex justify-between items-center">
            <Link href="/">
                <img src="./logo.svg" alt="shopsy" className="w-auto h-[45px] " />
            </Link>
            {pathname === '/' &&
                <form onClick={(e) => e.preventDefault()} className={`flex items-center ${showSearch && "border-b"} border-gray-400`}>
                    <input ref={inputRef} type="text" onChange={(e) => setSearchString(e.target.value)} value={searchString} placeholder="Search Products..." className={`bg-transparent px-4 placeholder:text-gray-600 text-black focus:outline-none focus:border-none  ${showSearch ? "visiblle" : "invisible"}`} />
                    <button onClick={handleShowSearch} className="text-xl md:cursor-pointer"><AiOutlineSearch /></button>
                </form>
            }
            <div className="links--container flex gap-4 items-center">
                <Link
                    className="font-medium hidden md:block hover:underline hover:text-gray-600"
                    href="/"
                >
                    <AiOutlineHome />
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
