import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Product } from '../types/Product';

interface Props {
  product: Product;
  onPress: () => void;
}

const ProductCard: React.FC<Props> = ({ product, onPress }) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Image source={{ uri: product.image }} style={styles.image} />
    <Text style={styles.title}>{product.title}</Text>
    <Text style={styles.price}>${product.price}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: { padding: 10, margin: 10, backgroundColor: '#fff', borderRadius: 8 },
  image: { height: 100, resizeMode: 'contain' },
  title: { fontWeight: 'bold', marginTop: 5 },
  price: { color: 'green', marginTop: 5 },
});

export default ProductCard;
