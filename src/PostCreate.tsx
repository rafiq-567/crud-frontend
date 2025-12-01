import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function PostCreate() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const navigate = useNavigate();

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        axios.post('https://crud-backend-production-c1e5.up.railway.app/api/posts', { title: title, body: body }).then( () => navigate('/') )
    }
    return (
        <div>
            <h1 className="font-bold">Create Post</h1>
            <div className="p-4">
                <Link to='/' className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                    Back
                </Link>
            </div>

            <form onSubmit={submit} className="max-w-md mx-auto p-6 bg-white rounded shadow">
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input type="text"
                        id="title"
                        name="title"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        placeholder="Enter post title"
                        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2" />
                </div>

                <div className="mb-4">
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">
                        Body
                    </label>
                    <textarea value={body} onChange={e => setBody(e.target.value)} name="body" id="Body" placeholder="Enter post body" className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2"></textarea>
                </div>

                <div>
                    <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700">
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}