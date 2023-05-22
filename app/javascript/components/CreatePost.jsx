import React from "react";
import { useForm } from "react-hook-form";

const CreatePost = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data) => {
    await fetch("api/v1/posts/create", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    reset();
  };

  return (
    <div className="container mx-auto pt-5">
      <form
        className="max-w-xl flex flex-col gap-2"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="text-2xl">Create a new post</h2>
        <label className="block">
          <span className="text-gray-700">Slug</span>
          <input
            type="text"
            className="mt-1 block w-full"
            placeholder=""
            {...register("slug", { required: true })}
          />
          {errors.slug && <span>This field is required</span>}
        </label>
        <label className="block">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            className="mt-1 block w-full"
            placeholder=""
            {...register("title", { required: true })}
          />
          {errors.title && <span>This field is required</span>}
        </label>
        <label className="block">
          <span className="text-gray-700">Body</span>
          <textarea
            className="mt-1 block w-full h-20"
            placeholder=""
            {...register("body", { required: true })}
          />
          {errors.body && <span>This field is required</span>}
        </label>
        <button className="!bg-sky-600 py-2 px-4 text-white" type="submit">
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
