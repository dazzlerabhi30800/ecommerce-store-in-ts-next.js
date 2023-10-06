import { PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import axios from 'axios';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
export default function PaymentForm({ amount }: { amount: number }) {
    const stripe = useStripe();
    const elements = useElements();




    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!stripe || !elements) return null;
        const cardElement = elements?.getElement("card");

        try {
            if (!stripe || !cardElement) return null;
            const { data } = await axios.post("/api/create-payment-intent", {
                data: { amount: 499 },
            });
            const clientSecret = data;
            console.log(data);

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <form className="flex flex-col p-2 gap-8" onSubmit={onSubmit}>
                <PaymentElement options={{ layout: { type: 'accordion' } }} />
                <button className="py-3 px-10 transition ease-in-out duration-300 md:hover:bg-rose-400 md:cursor-pointer text-black bg-rose-300 rounded-md w-fit mx-auto font-bold" type="submit">Pay ${amount}</button>
            </form>
        </>
    )
}