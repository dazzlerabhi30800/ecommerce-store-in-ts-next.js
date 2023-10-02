import { create } from "zustand";
import data from '@/data/products.json';


interface ProductState {
    products: product[],
    cart: product[],
    setProducts: (payload: product[]) => void;
    setCart: () => void;
}


export const useProductStore = create<ProductState>((set, get) => ({
    products: data.products,
    cart: data.products.filter(product => product.quantity > 0),
    setProducts: (payload) => set((state) => ({products: payload})),
    setCart: () => {
        console.log(get().cart);
        set({cart: get().products.filter((product) => product.quantity > 0)});
    }, 
}))