import { useEffect, useState } from 'react';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

// URL de endpoint: nuestra api en back
const api_url = "http://localhost:8000/post/"

export const Show = () => {
    const [posts,setPosts] = useState([]);

    const navigate = useNavigate();
    
    const getAllPosts = async () => {
        const res = await axios.get(api_url)           
        setPosts(res.data)        
        
    }    

    const deletePost = async (id)=> {
        await axios.delete(`${api_url}${id}`);
        navigate("/");
    }    

    useEffect(()=>{
        getAllPosts()
    },[])


  return (
    <div className="container-lg min-vh-100 d-flex justify-content-center align-items-center">
        <div className="row">
            <div className="col">
                <div className="container-fluid justify-content-start ms-2">                    
                    <Link to="/create" className='btn btn-primary mt-2 mb-2'>
                        <i className='fa-regular fa-plus'></i>
                    </Link>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Content</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post)=>(
                            <tr key={post.id}>
                                <td>{post.title}</td>
                                <td>{post.content}</td>
                                <td className='d-flex gap-2'>
                                    <Link to={`edit/${post.id}`} className='btn btn-warning btn-sm'><i className='fa fa-edit'></i></Link>
                                    <button className='btn btn-danger btn-sm' onClick={()=>{deletePost(post.id)}}><i className='fa fa-trash'></i></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}
