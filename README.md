# E-Commerce Site - Shopsy

## This project created using Typescript, Zustand, Next.js & Stripe Checkout Payment

You can add, remove Items in a cart , this functionality was created using zustand state management, after adding products to your cart, navigate to cart page using cart icon on navbar from that head to checkout page using checkout page link at the bottom of the cart page, then u will see the stripe payment checkout component.

## How to run locally on your machine

1. First fork or clone the repo inside the root folder run the command `npm install`
2. Create a .env.local file & create two variables `Next_PUBLIC_STRIPE_PUBLISHABLE_KEY` & `STRIPE_SECREET_KEY`
3. Head over to stripe official website [Stripe Website](https://stripe.com/en-in) , create an account get publishable key & secret key
4. After completing all the above mentioned steps run the server using command `npm run dev`

**You can see the Live Preview Here _[Shopsy Ecommerce](https://ecommerce-store-in-ts-next-js.vercel.app/)_**

## Images

![Home Page](/public/home-page.png, "This is Home Page of Shopsy")
![Cart Page](/public/cart-page.png, "This is Cart Page of Shopsy")
![Checkout Page](/public/checkout-page.png, "This is Checkout Page of Shopsy")
