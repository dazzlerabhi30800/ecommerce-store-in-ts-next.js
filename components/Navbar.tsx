"use client";
import { useProductStore } from '@/store/ProductStore';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Navbar() {
    let [cart] = useProductStore((state) => [state.cart]);
    return (
        <nav className="py-2 px-2 md:px-6 flex justify-between items-center">
            <img src="./logo.svg" alt="shopsy" className="w-auto h-[45px] " />
            <div className="links--container text-sm md:text-lg flex gap-4 items-center">
                <a className="font-medium hover:underline hover:text-gray-600" href="#">Home</a>
                <a data-cart={cart.length} className={`font-medium cart--btn ${cart.length > 0 && "showCart"} hover:underline hover:text-gray-600`} href="#">
                    <AiOutlineShoppingCart />
                </a>
            </div>
        </nav>
    )
}