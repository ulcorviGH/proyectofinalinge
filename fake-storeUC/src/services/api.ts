const BASE_URL = 'https://fakestoreapi.com/products';

export const getProducts = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};

export const createProduct = async (data) => {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};

export const updateProduct = async (id, data) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  });
  return res.json();
};

export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' });
  return res.json();
};
