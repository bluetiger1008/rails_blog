import React, { useEffect, useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const res = await fetch("api/v1/posts/index");
      const data = await res.json();

      setPosts(data);
    };

    getPosts();
  }, []);

  console.log(posts)

  return (
    <div>
      {posts.map((post) => (
        <div key={post?.id}>
          <a>{post.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Home;
