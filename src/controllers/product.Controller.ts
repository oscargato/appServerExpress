import { Request, Response } from 'express';
import { productNew, productById, allProducts, productUpdate, productDelete } from '../services/product.Services';

export const newProduct = async (req: Request, resp: Response) => {
  try {
    const { name, description } = req.body;
    const product = await productNew(name, description);
    resp.status(200).json({
      status: 200,
      data: product,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al crear el producto',
      error: err,
    });
  }
};

export const getProduct = async (req: Request, resp: Response) => {
  try {
    const param = Number(req.params.id);
    const product = await productById(param);
    resp.status(200).json({
      status: 200,
      data: product,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al obtener el producto',
      error: err,
    });
  }
};

export const getProducts = async (req: Request, resp: Response) => {
  try {
    const products = await allProducts();
    resp.status(200).json({
      status: 200,
      data: products,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al obtener la lista de productos',
      error: err,
    });
  }
};

export const updateProduct = async (req: Request, resp: Response) => {
  try {
    const id = Number(req.params.id);
    const { name, description } = req.body;
    const product = await productUpdate(name, description, id);
    resp.json({
      status: 200,
      msj: 'Producto modificado',
      product: product,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al modificar el producto',
      error: err,
    });
  }
};

export const deleteProduct = async (req: Request, resp: Response) => {
  try {
    const param = Number(req.params.id);
    const product = await productDelete(param);
    resp.status(200).json({
      status: 200,
      msj: 'Producto eliminado',
      product: product,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al eliminar el producto',
      error: err,
    });
  }
};
