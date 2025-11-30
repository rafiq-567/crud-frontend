import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostIndex() {
    const [posts, setPosts] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/posts').then(res=>setPosts(res.data))
    })

    const deletePost = (id: number)=>{
        if(confirm('are you sure you want to delete this post?')){
            axios.delete(`http://localhost:8000/api/posts/${id}`).then(()=>{
                setPosts(posts.filter((post: {id: number;})=> post.id !== id));
            });
        }
    }
    return (
        <div>
            <h1 className="font-bold">CRUD App</h1>

            <div className="p-6">
                <div className="mb-4">
                    <Link to="/create" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Create
                    </Link>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-normal">
                                    ID
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-normal">
                                    TITLE
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-normal">
                                    BODY
                                </th>

                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-normal">
                                    ACTIONS
                                </th>
                            </tr>

                        </thead>

                        <tbody className="bg-white divide-y divide-gray-200">
                            {posts.map(post=>
                            <tr key={post.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 text-sm text-gray-900">{post.id}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{post.title}</td>
                                <td className="px-6 py-4 text-sm text-gray-900">{post.body}</td>
                                <td className="px-6 py-4 space-x-2">
                                    <Link to={`/show/${post.id}`} className="bg-blue-500 text-white px-3 py-1 text-sm rounded hover:bg-blue-600">show</Link>
                                    <Link to={`/edit/${post.id}`} className="bg-yellow-500 text-white px-3 py-1 text-sm rounded hover:bg-yellow-600">edit</Link>
                                    <button onClick={()=> deletePost(post.id)} className="bg-red-500 text-white px-3 py-1 text-sm rounded hover:bg-red-600">delete</button>
                                </td>
                            </tr>
                            )}

                        </tbody>

                    </table>

                </div>

            </div>
        </div>
    )
}