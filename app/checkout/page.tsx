'use client';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from '@/components/PaymentForm';
import { useProductStore } from '@/store/ProductStore';
import { handleDiscount } from '@/utils/utils';


const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

export default function Checkout() {
    const [cart] = useProductStore(state => [state.cart]);
    const cartState = cart;

    const totalPrice = cartState.reduce((acc, item) => {
        return acc + (handleDiscount(item.price, item.discount) * item.quantity)
    }, 0)

    return (
        <div className='bg-sky-100 mx-auto p-2 rounded-md shadow-md w-[95%] max-w-[600px]'>
            <Elements stripe={stripePromise}>
                <PaymentForm amount={totalPrice} />
            </Elements>
        </div>
    )
}

