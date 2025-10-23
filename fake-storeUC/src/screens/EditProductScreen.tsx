import React from 'react';
import ProductForm from '../components/ProductForm';
import { updateProduct } from '../services/api';

export default function EditProductScreen({ route, navigation }) {
  const { product } = route.params;

  const handleSubmit = async (data) => {
    await updateProduct(product.id, data);
    navigation.navigate('List');
  };

  return <ProductForm initialValues={product} onSubmit={handleSubmit} />;
}
