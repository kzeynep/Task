import create from 'zustand';

const useStore = create((set) => ({
  markets: [],
  products: [],
  setMarkets: (markets) => set({ markets }),
  setProducts: (products) => set({ products }),
}));

export default useStore;
