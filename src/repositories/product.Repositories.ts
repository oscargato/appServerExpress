import { Product } from '../models/product.Model';

export const getProductByName = async (name: string) => {
  const product = await Product.findOne({ where: { name: name } });
  return product;
};

export const getCreateNewProduct = async (name: string, description: string) => {
  const newProduct = await Product.create({ name: name, description: description });
  return newProduct;
};

export const getProductById = async (id: number) => {
  const product = await Product.findByPk(id);
  return product;
};

export const getAllProducts = async () => {
  const products = await Product.findAll();
  return products;
};

export const getUpdateProduct = async (name: string, description: string, id: number) => {
  const product = await Product.update({ name: name, description: description }, { where: { id: id } });
  return product;
};

export const getDeleteProduct = async (id: number) => {
  const product = await Product.destroy({ where: { id: id } });
  return product;
};
