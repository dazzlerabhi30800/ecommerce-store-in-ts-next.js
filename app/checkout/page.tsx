"use client";
import axios from 'axios';
import ElementForm from '@/components/ElementForm';
import { useEffect, useState } from 'react';



async function createPaymentIntent() {
    const { data } = await axios.post("/api/create-payment-intent", {
        data: { amount: 499 },
    });
    return data;
}

export default function Checkout() {
    const [clientSecret, setClientSecret] = useState<string | null>(null);
    useEffect(() => {
        createPaymentIntent().then(data => setClientSecret(data));
    }, [])
    return (
        <div className='bg-sky-100 flex flex-col gap-6 mx-auto p-3 my-6 text-center rounded-md shadow-md w-[95%] max-w-[600px]'>
            <h1 className='font-bold text-xl'>Payment Gateway</h1>
            {clientSecret &&
                <ElementForm clientSecret={clientSecret} />
            }
        </div >
    )
}

