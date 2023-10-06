import { User } from '../models/user.Model';

export const getCreateNewUser = async (username:string, password:string)=>{
    const newUser = await User.create({username: username, password: password});
    return newUser;    
}

export const getUserById = async (id:number) =>{
    const user = await User.findByPk(id);
    return user;
}

export const getUserByName = async (name:string) => {    
    const user = await User.findOne({ where:{ username: name }});
    return user;
}

export const getAllUsers = async ()=> {
    const users = await User.findAll();    
    return users;
}

export const getUpdateUser = async (username:string, password:string, id:number) =>{
    const user = await User.update({username: username, password: password},{ where:{ id: id }});
    return user;
}

export const getDeleteUser = async (id:number) => {
    const user = await User.destroy({ where: { id: id }});
    return user; 
}
