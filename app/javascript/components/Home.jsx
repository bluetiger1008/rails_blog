import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="container mx-auto pt-5">
      <h2 className="text-2xl mb-2">
        Kevin Wang's ROR/React/Tailwind CSS Blog Example
      </h2>

      <div className="flex gap-2">
        <Link to="/posts">
          <button className="bg-sky-600 py-2 px-4 text-white">
            Go to Posts
          </button>
        </Link>
        <Link to="/new">
          <button className="bg-sky-600 py-2 px-4 text-white">
            Create Post
          </button>
        </Link>
      </div>

      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
