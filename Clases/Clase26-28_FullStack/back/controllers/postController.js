import postModel from '../models/postModels.js'

// CRUD

// mostrar todos los post: READ
export const getAllPosts = async (req,res)=>{
    try{
        const posts = await postModel.findAll();
        res.json(posts);

    } catch(error){
        res.json({message:error.message})
    }
}

// mostrar un post
export const getPost = async (req,res)=>{
    try{
        const {id} = req.params;
        const post = await postModel.findByPk(id);
        res.json(post);

    } catch(error){
        res.json({message:error.message})
    }
}

// crear post
export const createPost = async (req,res)=>{
    try{        
        await postModel.create(req.body)
        res.json({
            "message": "Post creado correctamente"
        })

    } catch(error){
        res.json({message:error.message})
    }
}

// editar un post
export const updatePost = async (req,res)=>{
    try{        
        const post = await postModel.update(req.body,{
            where: {id:req.params.id}
        });
        res.json({
            "message": "Post editado correctamente"
        })
        

    } catch(error){
        res.json({message:error.message})
    }
}

// eliminar un post
export const deletePost = async (req,res)=>{
    try{        
        await postModel.destroy({where: {id:req.params.id}})
        res.json({
            "message": "Post eliminado correctamente"
        })

    } catch(error){
        res.json({message:error.message})
    }
}