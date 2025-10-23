import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../services/api';
import { Product } from '../types/Product';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/AppNavigation';

type Props = NativeStackScreenProps<RootStackParamList, 'List'>;

const ProductListScreen: React.FC<Props> = ({ navigation }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ProductCard product={item} onPress={() => navigation.navigate('Detail', { id: item.id })} />
      )}
    />
  );
};

export default ProductListScreen;
