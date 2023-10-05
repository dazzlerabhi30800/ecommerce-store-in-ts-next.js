"use client";
import { useProductStore } from "@/store/ProductStore";
import { INTEGER_FORMATTER, handleDiscount } from "@/utils/utils";
import Image from "next/image";

export default function Product({ product }: { product: product }) {
    const [searchString, addToCart, minusToCart] = useProductStore((state) => [state.searchString, state.addToCart, state.minusToCart]);



    const stringSplit = (product: string) => {
        const regex = new RegExp(searchString, 'gi');
        let splitedString = product.split('');
        const newString = splitedString.map((str, index) => {
            if (searchString.toLowerCase().includes(str.toLowerCase())) {
                return <span key={index} className="bg-yellow-300" >{str}</span>
            }
            return <span key={index}>{str}</span>

        })
        return newString;
    }




    return (
        <div className="product shadow-lg flex flex-col text-center justify-between gap-4 p-4 bg-white rounded-md min-w-[300px] w-full max-w-[350px] h-[420px]">
            <Image priority={true} className="productImg" quality={100} style={{ width: "auto", height: "auto", margin: "5px auto" }} src={product.image} width={125} height={35} alt={product.name} />
            <h1 className="font-bold">
                {stringSplit(product.name)}
            </h1>
            <div className="flex bg-gray-400 rounded-lg items-center text-white w-fit mx-auto font-medium">
                <button onClick={() => minusToCart(product.id)} className="py-2 px-4 border-r-2 border-white">-</button>
                <span className="py-2 px-4 border-r-2 border-white">{product.quantity}</span>
                <button onClick={() => addToCart(product.id)} className="py-2 px-4">+</button>
            </div>
            <div className="priceContainer font-medium flex items-center gap-4 justify-center">
                <span className="line-through  text-gray-500">₹{INTEGER_FORMATTER.format(product.price)}</span>
                <span>₹{INTEGER_FORMATTER.format(handleDiscount(product.price, product.discount))}</span>
            </div>
        </div>
    )

}