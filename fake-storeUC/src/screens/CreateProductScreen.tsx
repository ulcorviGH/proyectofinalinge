import React from 'react';
import ProductForm from '../components/ProductForm';
import { createProduct } from '../services/api';

export default function CreateProductScreen({ navigation }) {
  const handleSubmit = async (data) => {
    await createProduct(data);
    navigation.navigate('List');
  };

  return <ProductForm onSubmit={handleSubmit} />;
}
