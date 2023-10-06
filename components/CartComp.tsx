'use client';
import Image from "next/image";
import { INTEGER_FORMATTER, handleDiscount } from "@/utils/utils";
import { BsFillTrashFill } from 'react-icons/bs';
import { useProductStore } from "@/store/ProductStore";

export default function CartComp({ cart }: { cart: product }) {
    const [addToCart, minusToCart, removeItem] = useProductStore(state => [state.addToCart, state.minusToCart, state.removeItem]);
    return (
        <div className="cart--item relative flex text-left items-center gap-4 p-2 bg-pink-300 rounded-md shadow-md">
            <Image priority={true} style={{ width: "auto", height: "150px" }} width={140} height={50} src={cart.image} alt={cart.name} />
            <div className="flex flex-col gap-4">
                <h2>{cart.name}</h2>
                <div className="flex bg-gray-300 rounded-lg items-center text-black w-fit mx-initial font-medium shadow-xl">
                    <button onClick={() => minusToCart(cart.id)} className="py-2 px-4 border-r-2 border-white">-</button>
                    <span className="py-2 px-4 border-r-2 border-white">{cart.quantity}</span>
                    <button onClick={() => addToCart(cart.id)} className="py-2 px-4">+</button>
                </div>
                <div className="font-bold">
                    ${INTEGER_FORMATTER.format((handleDiscount(cart.price, cart.discount)) * cart.quantity)}
                </div>
            </div>
            <button onClick={() => removeItem(cart.id)} className="removeBtn text-2xl text-gray-800 absolute top-5 right-5 transition ease-in-out duration-300 hover:text-gray-600 md:cursor-pointer">
                <BsFillTrashFill />
            </button>
        </div>
    )
}