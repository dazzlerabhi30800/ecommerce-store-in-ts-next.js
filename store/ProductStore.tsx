import { create } from "zustand";
import data from '@/data/products.json';


interface ProductState {
    products: product[],
    cart: product[]
    setProducts: (payload: product[]) => void;
    setCart: () => void;
}


export const useProductStore = create<ProductState>((set, get) => ({
    products: data.products,
    cart: [],
    setProducts: (payload) => set((state) => ({products: payload})),
    setCart: () => {
        const products = get().products;
        const cart = products.filter((product) => product.quantity > 0);
        set({cart});
    }, 
}))