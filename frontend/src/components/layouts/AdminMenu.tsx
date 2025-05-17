import Link from "next/link";
import React from "react";
import { AiFillDashboard, AiFillFolder, AiFillProduct } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoPeopleSharp, IoPowerSharp } from "react-icons/io5";
import { RiShoppingBag4Fill } from "react-icons/ri";

export default function AdminMenu() {
  return (
    <div>
      <ul>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <AiFillDashboard className="text-xl" />
            <span className="text-base">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/products"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <AiFillProduct className="text-xl" />
            <span className="text-base">Products</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin/categories"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <AiFillFolder className="text-xl" />
            <span className="text-base">Categories</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <RiShoppingBag4Fill className="text-xl" />
            <span className="text-base">Orders</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <IoPeopleSharp className="text-xl" />
            <span className="text-base">Customers</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <FaUserCircle className="text-xl" />
            <span className="text-base">Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <FaGear className="text-xl" />
            <span className="text-base">Settings</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <IoPowerSharp className="text-xl" />
            <span className="text-base">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
