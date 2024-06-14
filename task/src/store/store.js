import create from 'zustand';
import { supabase } from '../supabase/supabaseClient';

const useStore = create((set) => ({
  user: null,
  markets: [],
  products: [],
  fetchMarkets: async () => {
    const { data, error } = await supabase.from('markets').select('*');
    if (error) console.log('Error fetching markets:', error);
    else set({ markets: data });
  },
  fetchProducts: async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) console.log('Error fetching products:', error);
    else set({ products: data });
  },
  addMarket: async (name) => {
    const { data, error } = await supabase.from('markets').insert([{ name }]);
    if (error) console.log('Error adding market:', error);
    else set((state) => ({ markets: [...state.markets, ...data] }));
  },
  addProduct: async (marketId, name, quantity) => {
    const { data, error } = await supabase.from('products').insert([{ market_id: marketId, name, quantity }]);
    if (error) console.log('Error adding product:', error);
    else set((state) => ({ products: [...state.products, ...data] }));
  },
  updateProductQuantity: async (id, quantity) => {
    const { data, error } = await supabase.from('products').update({ quantity }).eq('id', id);
    if (error) console.log('Error updating product:', error);
    else set((state) => ({
      products: state.products.map((product) =>
        product.id === id ? { ...product, quantity: data[0].quantity } : product
      ),
    }));
  },
}));
export default useStore;
