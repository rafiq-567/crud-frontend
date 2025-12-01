import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function PostShow() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');


    const { id } = useParams();

    useEffect(() => {
        if (id) {
            axios.get(`https://crud-backend-production-c1e5.up.railway.app/api/posts/${id}`).then(res => {
                setTitle(res.data.title);
                setBody(res.data.body)
            })
        }
    }, [id])


    return (
        <div>
            <h1 className="font-bold">Show Post</h1>
            <div className="p-4">
                <Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Back
                </Link>
            </div>

            <div>
                <p><strong>Title:</strong>{title}</p>
                <p><strong>Body:</strong>{body}</p>

            </div>
        </div>
    );
}