import { create } from "zustand";
import data from '@/data/products.json';
import { persist, createJSONStorage, devtools } from 'zustand/middleware';


interface ProductState {
    products: product[],
    cart: product[],
    addToCart: (id: number) => void;
    minusToCart: (id: number) => void;
    removeItem: (id: number) => void;
}


export const useProductStore = create<ProductState>()(
    devtools(
        persist(
            (set, get) => ({
                products: data.products,
                cart: data.products.filter(product => product.quantity > 0),
                addToCart: (id) => {
                    let products = get().products.map((product) => {
                        if (product.id === id) {
                            return { ...product, quantity: product.quantity + 1 };
                        }
                        return product;
                    });

                    let cart = products.filter(product => product.quantity > 0);

                    set({ cart })
                    set({ products })
                },
                minusToCart: (id) => {
                    let products = get().products.map((product) => {
                        if (product.id === id) {
                            return { ...product, quantity: product.quantity - 1 <= 0 ? 0 : product.quantity - 1 };
                        }
                        return product;
                    });
                    let cart = products.filter(product => product.quantity > 0);

                    set({ products })
                    set({ cart })
                },
                removeItem: (id) => {
                    let newCart = get().cart.filter(item => item.id !== id);
                    set({ cart: newCart });
                }
            }),
            {
                name: "products",
                storage: createJSONStorage(() => sessionStorage),
            }
        )
    ))