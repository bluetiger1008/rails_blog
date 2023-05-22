import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home";
import CreatePost from "./CreatePost";
import Post, { loader as postLoader } from "./Post";
import Listing from "./Listing";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "posts",
        element: <Listing />,
      },
      {
        path: "new",
        element: <CreatePost />,
      },
      {
        path: "post/:slug",
        element: <Post />,
        loader: postLoader,
        errorElement: <h2>Note not found</h2>,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
