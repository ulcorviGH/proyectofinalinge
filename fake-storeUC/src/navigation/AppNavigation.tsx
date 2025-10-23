import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductListScreen from '../screens/ProductListScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CreateProductScreen from '../screens/CreateProductScreen';
import EditProductScreen from '../screens/EditProductScreen';
import DeleteProductScreen from '../screens/DeleteProductScreen';
import { Product } from '../types/Product';

export type RootStackParamList = {
  List: undefined;
  Detail: { id: number };
  Create: undefined;
  Edit: { product: Product };
  Delete: { id: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={ProductListScreen} />
      <Stack.Screen name="Detail" component={ProductDetailScreen} />
      <Stack.Screen name="Create" component={CreateProductScreen} />
      <Stack.Screen name="Edit" component={EditProductScreen} />
      <Stack.Screen name="Delete" component={DeleteProductScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
