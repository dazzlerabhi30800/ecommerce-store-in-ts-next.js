'use client';
import { useState, useEffect } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '@/components/PaymentForm';
import { useProductStore } from '@/store/ProductStore';
import { handleDiscount } from '@/utils/utils';
import { INTEGER_FORMATTER } from '@/utils/utils';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const [cart] = useProductStore(state => [state.cart]);
    const [cartState, setCartState] = useState<product[]>([]);
    useEffect(() => {
        setCartState(cart);
    }, [cart])




    const totalPrice = cartState.reduce((acc, item) => {
        return acc + (handleDiscount(item.price, item.discount) * item.quantity)
    }, 0)

    return (
        <div className='bg-sky-100 flex flex-col gap-4 mx-auto p-2 text-center rounded-md shadow-md w-[95%] max-w-[600px]'>
            <h1 className='font-bold text-xl'>Total Amount - ₹{INTEGER_FORMATTER.format(totalPrice)}</h1>
            <Elements stripe={stripePromise} >
                <PaymentForm amount={totalPrice} />
            </Elements>
        </div>
    )
}

