import Link from "next/link";
import React from "react";

export default function ProductCard() {
  return (
    <Link
      href={"/"}
      className="bg-white shadow-sm rounded-md overflow-hidden flex flex-col group"
    >
      <div className="w-full aspect-square overflow-hidden">
        <img
          src="https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcGYtbXUxNC10ZWQ2MTM5LWdsb3ktbC5qcGc.jpg"
          alt=""
          className="h-full w-full object-cover object-center group-hover:scale-110 transition-all"
        />
      </div>
      <div className="px-2 py-2">
        <span className="bg-blue-500 px-1  py-0.5 text-xs uppercase text-white">
          Headphone
        </span>
        <h2 className="line-clamp-2 text-base font-medium text-gray-800">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa magnam
          dolorem vitae corporis natus, quisquam non pariatur est repellat et.
        </h2>
        <div className="mt-2 space-x-2">
          <span className="text-gray-500 text-sm line-through">$200.00</span>
          <span className="text-gray-800 font-semibold text-lg">$150.00</span>
        </div>
      </div>
    </Link>
  );
}
