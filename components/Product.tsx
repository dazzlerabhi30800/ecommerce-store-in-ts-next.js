import { INTEGER_FORMATTER } from "@/utils/utils";
import Image from "next/image";

export default function Product({ product }: { product: product }) {
    return (
        <div className="product shadow-lg flex flex-col text-center justify-center gap-4 p-4 bg-white rounded-md min-w-[300px] w-full max-w-[350px] h-[420px]">
            <Image className="productImg" quality={100} style={{ width: "auto", height: "auto", margin: "5px auto" }} src={product.image} width={125} height={35} alt={product.name} />
            <h1 className="font-bold">{product.name}</h1>
            <div className="flex bg-gray-400 rounded-lg items-center text-white w-fit mx-auto font-medium">
                <button className="py-2 px-4 border-r-2 border-white">-</button>
                <span className="py-2 px-4 border-r-2 border-white">{product.quantity}</span>
                <button className="py-2 px-4">+</button>
            </div>
            <span className="font-medium text-gray-800">₹{INTEGER_FORMATTER.format(product.price)}</span>
        </div>
    )

}