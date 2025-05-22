"use client";
import { useState } from "react";
import Button from "@/components/widgets/Button";
import TextArea from "@/components/widgets/TextArea";
import TextField from "@/components/widgets/TextField";
import Link from "next/link";
import React from "react";
import {
  MdDescription,
  MdOutlineAlternateEmail,
  MdSubtitles,
} from "react-icons/md";
import { GoPlus } from "react-icons/go";
import { FiTrash } from "react-icons/fi";
import { createCategory } from "@/lib/categories";

export default function page() {
  const [images, setImages] = useState<File>();

  const handleAddCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    if (!images) {
      return;
    }
    // formData.append("image", images);
    // formData.append("name", formData.get("name") as string);
    // formData.append("slug", formData.get("slug") as string);
    // formData.append("description", formData.get("description") as string);
    const res = await createCategory(formData);
    console.log(res);
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-lg tracking-wide">Add Product</h2>
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <Link href={"/admin"}>Admin</Link>
            </li>
            <li>
              <Link href={"/admin/categories"}>Categories</Link>
            </li>
            <li>Add</li>
          </ul>
        </div>
      </div>
      <form onSubmit={handleAddCategory}>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-3">
          <div className="bg-white rounded-sm shadow-sm px-4 py-2 space-y-2">
            <h2 className="text-lg font-medium text-gray-700">
              Basic Information
            </h2>
            <TextField
              label="Name"
              name="name"
              icon={<MdSubtitles />}
              require={true}
              className="rounded-sm"
            />
            <TextField
              label="Slug"
              name="slug"
              icon={<MdOutlineAlternateEmail />}
              require={true}
              className="rounded-sm"
            />
            <TextArea
              label="Description"
              name="description"
              icon={<MdDescription />}
              require={true}
              className="rounded-sm"
            />

            <h2 className="text-lg font-medium text-gray-700">Upload Image</h2>
            <input
              type="file"
              id="image"
              accept="image/*"
              onChange={(e) => setImages(e.target.files?.[0])}
              hidden
            />
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-2 relative">
              {images ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(images)}
                    alt="product"
                    className="w-full h-full aspect-square object-cover rounded-sm shadow-sm"
                  />
                  <button className="p-1 bg-red-50/50 rounded-md  transition-all cursor-pointer text-red-500 absolute top-1 right-1">
                    <FiTrash
                      className="text-lg"
                      onClick={() => setImages(undefined)}
                    />
                  </button>
                </div>
              ) : (
                <label
                  className="h-full w-full aspect-square flex items-center justify-center bg-gray-100 rounded-sm shadow-sm flex-col cursor-pointer"
                  htmlFor="image"
                >
                  <GoPlus className="text-5xl text-gray-500" />
                  <p className="text-sm text-gray-500">Add Image</p>
                </label>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-2">
            <Link href={"/admin/products"}>
              <Button
                className="bg-slate-200 text-gray-800 rounded-sm "
                label="Cancel"
              />
            </Link>
            <Button className="rounded-sm shadow-sm " label="Add Category" />
          </div>
        </div>
      </form>
    </div>
  );
}
