"use client";
import { useProductStore } from "@/store/ProductStore";
import { INTEGER_FORMATTER } from "@/utils/utils";
import Image from "next/image";

export default function Product({ product }: { product: product }) {
    const [products, setProducts, setCart] = useProductStore((state) => [state.products, state.setProducts, state.setCart]);


    // function to convert the discount into price
    const handleDiscount = (price: number, discount: number) => {
        const discountedPrice = Math.floor((discount * price) / 100);
        return price - discountedPrice;
    }


    // function to handle add to cart functionality
    const handleAddToCart = (id: number) => {
        setProducts(products.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity + 1 }
            }
            return item;
        }))
        setCart();
    }


    // function to handle remove cart functionality
    const handleMinusCart = (id: number) => {
        setProducts(products.map((item) => {
            if (item.id === id) {
                return { ...item, quantity: item.quantity - 1 <= 0 ? 0 : item.quantity - 1 }
            }
            return item;
        }))
        setCart();
    }



    return (
        <div className="product shadow-lg flex flex-col text-center justify-between gap-4 p-4 bg-white rounded-md min-w-[300px] w-full max-w-[350px] h-[420px]">
            <Image className="productImg" quality={100} style={{ width: "auto", height: "auto", margin: "5px auto" }} src={product.image} width={125} height={35} alt={product.name} />
            <h1 className="font-bold">{product.name}</h1>
            <div className="flex bg-gray-400 rounded-lg items-center text-white w-fit mx-auto font-medium">
                <button onClick={() => handleMinusCart(product.id)} className="py-2 px-4 border-r-2 border-white">-</button>
                <span className="py-2 px-4 border-r-2 border-white">{product.quantity}</span>
                <button onClick={() => handleAddToCart(product.id)} className="py-2 px-4">+</button>
            </div>
            <div className="priceContainer font-medium flex items-center gap-4 justify-center">
                <span className="line-through  text-gray-500">₹{INTEGER_FORMATTER.format(product.price)}</span>
                <span>₹{INTEGER_FORMATTER.format(handleDiscount(product.price, product.discount))}</span>
            </div>
        </div>
    )

}