import { create } from "zustand";
import data from '@/data/products.json';


interface ProductState {
    products: product[],
}


export const useProductStore = create<ProductState>((set) => ({
    products: data.products,
}))