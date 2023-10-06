'use client';
import { CardElement, PaymentElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from 'axios';
import React from 'react';

export default function PaymentForm({ amount }: { amount: number }) {
    const stripe = useStripe();
    const elements = useElements();


    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const cardElement = elements?.getElement("card");
        try {
            if (!stripe || !cardElement) return null;
            const { data } = await axios.post("/api/create-payment-intent", {
                data: { amount: amount },
            });
            const clientSecret = data;

            await stripe?.confirmCardPayment(clientSecret, {
                payment_method: { card: cardElement },
            });
        } catch (error) {
            alert(error);
        }
    }

    return (
        <form className="flex flex-col p-2 gap-8" onSubmit={onSubmit}>
            {/* <PaymentElement /> */}
            <CardElement />
            <button className="py-2 px-8 transition ease-in-out duration-300 md:hover:bg-rose-400 md:cursor-pointer text-black bg-rose-300 rounded-md w-fit mx-auto " type="submit">Submit</button>
        </form>
    )
}