import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import supabase from '../services/supabaseClient';
import useStore from '../store/useStore';

const MarketScreen = ({ route }) => {
  const { marketId } = route.params;
  const { products, setProducts } = useStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const { data, error } = await supabase.from('Product').select('*').eq('marketId', marketId);
    if (error) console.log(error);
    else setProducts(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.productItem}>
            <Text>{item.name}</Text>
            <Text>Quantity: {item.quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  productItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MarketScreen;
