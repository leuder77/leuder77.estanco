import { create } from "zustand";

const cartStore = create((set) => ({
    carrito: [],
    addToCart: (producto) =>
        set((state) => ({
            carrito: [...state.carrito, producto],
        })),
    removeFromCart: (indexToRemove) => set((state) => ({
        carrito: state.carrito.filter((_, index) => index !== indexToRemove)
    })),
    clearCart: () => set({ carrito: [] })
}));

export default cartStore;