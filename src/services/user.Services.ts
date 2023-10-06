import bcrypt from 'bcrypt';
import  Jwt  from 'jsonwebtoken';
import { getAllUsers, 
         getUserById, 
         getUpdateUser, 
         getDeleteUser,
         getUserByName,
         getCreateNewUser 
       } from '../repositories/user.Repositories';

export const userLogin = async (username:string, password:string)=>{

    const user:any = await getUserByName(username)
    if(!user){
        throw new Error('Credeciales incorrectas'); 
    }

    const passwordValid = await bcrypt.compare(password, user.password) 
    if(!passwordValid){
        throw new Error('Credeciales incorrectas'); 
    }

    const token = Jwt.sign({ username },process.env.SECRET_KEY || 'Q%Wh6nqtpYbW3hPC', { expiresIn:'1800000' })

    return token;
}

export const userNew = async (username:string, password:string)=>{    
    const user = await getUserByName(username);
    
    if(user){
        throw new Error(`Usuario ${ username } ya existe`);    
    }
    else
    {   const hashPassword = await bcrypt.hash(password,10); 
        const createUser = await getCreateNewUser(username,hashPassword);
        return createUser; 
    }    
}

export const allUsers = async ()=>{
    const user = await getAllUsers();
    return user;
}

export const userById = async (id:number)=>{
    const user = await getUserById(id);

    if(!user){
        throw new Error('Usuario no encontrado');
    }

    return user;
}

export const userUpdate = async (username:string, password:string, id:number)=>{
    const user = await getUserById(id);
    if(!user){
        throw new Error('Usuario no encontrado');    
    }

    const hashPassword = await bcrypt.hash(password,10);
    const updateUser = await getUpdateUser(username,hashPassword,id);

    return updateUser;
}

export const userDelete = async (id:number)=>{
    const user = await getDeleteUser(id);

    if(!user){
        throw new Error('Usuario no encontrado');
    }

    return user;    
}