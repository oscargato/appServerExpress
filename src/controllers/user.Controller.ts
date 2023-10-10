import { Request, Response } from 'express';
import { userLogin, userNew, allUsers, userById, userUpdate, userDelete } from '../services/user.Services';

export const loginUser = async (req: Request, resp: Response) => {
  try {
    const { username, password } = req.body;
    const token = await userLogin(username, password);
    resp.status(200).json({
      status: 200,
      data: token,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al hacer login',
      error: err,
    });
  }
};

export const newUser = async (req: Request, resp: Response) => {
  try {
    const { username, password } = req.body;
    const user = await userNew(username, password);
    resp.status(200).json({
      status: 200,
      data: user,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al crear el usuario',
      error: err,
    });
  }
};

export const getUser = async (req: Request, resp: Response) => {
  try {
    const param = Number(req.params.id);
    const user = await userById(param);
    resp.status(200).json({
      status: 200,
      data: user,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al obtener el usuario',
      error: err,
    });
  }
};

export const getUsers = async (req: Request, resp: Response) => {
  try {
    const users = await allUsers();
    resp.status(200).json({
      status: 200,
      data: users,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al obtener la lista',
      error: err,
    });
  }
};

export const updateUser = async (req: Request, resp: Response) => {
  try {
    const id = Number(req.params.id);
    const { username, password } = req.body;
    const users = await userUpdate(username, password, id);
    resp.json({
      status: 200,
      msj: 'Usuario modificado',
      users: users,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al modificar el usuario',
      error: err,
    });
  }
};

export const deleteUser = async (req: Request, resp: Response) => {
  try {
    const param = Number(req.params.id);
    const user = await userDelete(param);
    resp.status(200).json({
      status: 200,
      msj: 'Usuario eliminado',
      user: user,
    });
  } catch (err) {
    resp.status(400).json({
      status: 400,
      msj: 'Error al eliminar el usuario',
      error: err,
    });
  }
};
