import React, { useEffect } from 'react';
import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
import supabase from '../services/supabaseClient';
import useStore from '../store/useStore';

const MainScreen = ({ navigation }) => {
  const { markets, setMarkets } = useStore();

  useEffect(() => {
    fetchMarkets();
  }, []);

  const fetchMarkets = async () => {
    const { data, error } = await supabase.from('Market').select('*');
    if (error) console.log(error);
    else setMarkets(data);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={markets}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.marketItem}>
            <Text>{item.name}</Text>
            <Button
              title="View Products"
              onPress={() => navigation.navigate('Market', { marketId: item.id })}
            />
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
  marketItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default MainScreen;
