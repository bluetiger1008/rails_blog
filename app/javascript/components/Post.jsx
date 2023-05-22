import React from "react";
import { useLoaderData, Form, redirect } from "react-router-dom";

export default function Post() {
  const post = useLoaderData();
  console.log(post)
  return (
    <div className="container mx-auto pt-5">
      <h2 className="text-2xl mb-2">Title: {post.title}</h2>
      <div>{post.body}</div>
    </div>
  );
}

export async function loader({ params }) {
  const res = await fetch(`/api/v1/posts/${params.slug}`);
  const post = await res.json();
  if (!post) throw new Response("", { status: 404 });
  return post;
}
