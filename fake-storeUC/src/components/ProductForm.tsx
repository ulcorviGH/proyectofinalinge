import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Product } from '../types/Product';

interface Props {
  initialValues?: Partial<Product>;
  onSubmit: (data: Omit<Product, 'id'>) => void;
}

const ProductForm: React.FC<Props> = ({ initialValues = {}, onSubmit }) => {
  const [title, setTitle] = useState(initialValues.title || '');
  const [price, setPrice] = useState(initialValues.price?.toString() || '');
  const [description, setDescription] = useState(initialValues.description || '');
  const [image, setImage] = useState(initialValues.image || '');

  return (
    <View style={styles.container}>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} style={styles.input} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" style={styles.input} />
      <TextInput placeholder="Description" value={description} onChangeText={setDescription} style={styles.input} />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} style={styles.input} />
      <Button title="Submit" onPress={() => onSubmit({ title, price: parseFloat(price), description, image })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  input: { marginBottom: 10, borderBottomWidth: 1, padding: 8 },
});

export default ProductForm;
