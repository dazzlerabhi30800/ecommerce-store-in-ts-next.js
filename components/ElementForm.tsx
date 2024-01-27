"use client";
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';
import { useEffect, useState } from 'react';
import { useProductStore } from '@/store/ProductStore';
import { handleDiscount } from '@/utils/utils';
import { Hi_Melody } from 'next/font/google';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
export default function ElementForm({ clientSecret }: { clientSecret: string }) {
    const [cartItems, setCartItems] = useState<product[]>([]);
    const [cart] = useProductStore(state => [state.cart]);
    useEffect(() => {
        setCartItems(cart)
    }, [cart])



    const totalPrice = cartItems.reduce((acc, item) => {
        return acc + (handleDiscount(item.price, item.discount) * item.quantity)
    }, 0)

    return (
        <Elements stripe={stripePromise} options={{ clientSecret: clientSecret, appearance: { theme: "stripe" } }}>
            <PaymentForm amount={totalPrice} />
        </Elements >
    )
}