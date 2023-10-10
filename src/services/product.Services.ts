import {
  getProductByName,
  getCreateNewProduct,
  getProductById,
  getAllProducts,
  getUpdateProduct,
  getDeleteProduct,
} from '../repositories/product.Repositories';

export const productNew = async (name: string, description: string) => {
  const product = await getProductByName(name);
  if (product) {
    throw new Error(`Producto ${name} ya existe`);
  } else {
    const createProduct = await getCreateNewProduct(name, description);
    return createProduct;
  }
};

export const productById = async (id: number) => {
  const product = await getProductById(id);

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product;
};

export const allProducts = async () => {
  const products = await getAllProducts();
  return products;
};

export const productUpdate = async (name: string, description: string, id: number) => {
  const product = await getProductById(id);

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  const updateProduct = await getUpdateProduct(name, description, id);

  return updateProduct;
};

export const productDelete = async (id: number) => {
  const product = await getDeleteProduct(id);

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product;
};
