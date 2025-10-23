import React, { useEffect } from 'react';
import { View, Text, Button } from 'react-native';
import { deleteProduct } from '../services/api';

export default function DeleteProductScreen({ route, navigation }) {
  const { id } = route.params;

  const handleDelete = async () => {
    await deleteProduct(id);
    navigation.navigate('List');
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>¿Estás seguro que deseas eliminar este producto?</Text>
      <Button title="Eliminar" onPress={handleDelete} />
    </View>
  );
}
