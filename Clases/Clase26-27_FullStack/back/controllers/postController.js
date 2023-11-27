import postModel from '../models/postModels.js'

export const getAllPosts = async (req,res)=>{
    try{
        const posts = await postModel.findAll();
        res.json(posts);

    } catch(error){
        res.json({message:error.message})
    }
}