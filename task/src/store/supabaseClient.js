
export const fetchMarkets = async () => {
    const { data, error } = await supabase.from('Market').select('*');
    if (error) console.log(error);
    return data;
  };
  
  export const fetchProducts = async (marketId) => {
    const { data, error } = await supabase.from('Product').select('*').eq('marketId', marketId);
    if (error) console.log(error);
    return data;
  };
  
export const fetchBrand = async () => {
    const { data, error } = await supabase.from('Brand').select('*');
    if (error) console.log(error);
    return data;
  };

  export const fetchUser = async () => {
    const { data, error } = await supabase.from('User').select('*');
    if (error) console.log(error);
    return data;
  };
 