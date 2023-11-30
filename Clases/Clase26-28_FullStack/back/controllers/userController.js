import userModel from '../models/userModel.js'

// CRUD

// mostrar todos los post: READ
export const getAllUsers = async (req,res)=>{
    try{
        const users = await userModel.findAll();
        res.json(users);

    } catch(error){
        res.json({message:error.message})
    }
}

// mostrar un post
export const getUser = async (req,res)=>{
    try{
        const {id} = req.params;
        const user = await userModel.findByPk(id);
        res.json(user);

    } catch(error){
        res.json({message:error.message})
    }
}

// crear post
export const createUser = async (req,res)=>{
    try{        
        await userModel.create(req.body)
        res.json({
            "message": "Usuario creado correctamente"
        })

    } catch(error){
        res.json({message:error.message})
    }
}

// editar un post
export const updateUser = async (req,res)=>{
    try{        
        const post = await userModel.update(req.body,{
            where: {id:req.params.id}
        });
        res.json({
            "message": "Usuario editado correctamente"
        })
        

    } catch(error){
        res.json({message:error.message})
    }
}

// eliminar un post
export const deleteUser = async (req,res)=>{
    try{        
        await userModel.destroy({where: {id:req.params.id}})
        res.json({
            "message": "Usuario eliminado correctamente"
        })

    } catch(error){
        res.json({message:error.message})
    }
}