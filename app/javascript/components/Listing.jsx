import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Listing = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("api/v1/posts/index");
      const data = await res.json();

      setPosts(data);
    };

    getPosts();
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-2">Posts</h2>
      <table className="border-collapse border border-slate-500 w-full">
        <thead>
          <tr>
            <th className="border border-slate-600">Title</th>
            <th className="border border-slate-600">Slug</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="border border-slate-700 p-2">
                <Link to={`/post/${post.slug}`} className="text-blue-500">
                  {post.title}
                </Link>
              </td>
              <td className="border border-slate-700 p-2">{post.slug}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listing;
