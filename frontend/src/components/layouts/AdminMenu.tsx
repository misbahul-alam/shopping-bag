import Link from "next/link";
import React from "react";
import {
  AiFillDashboard,
  AiFillFolder,
  AiFillProduct,
  AiFillTags,
} from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaGear } from "react-icons/fa6";
import { IoPowerSharp } from "react-icons/io5";
import { MdSpaceDashboard } from "react-icons/md";
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
            href="/admin"
            className="flex items-center gap-2 px-4 py-2.5 hover:bg-gray-100 text-gray-700 text-lg transition-all"
          >
            <AiFillProduct className="text-xl" />
            <span className="text-base">Products</span>
          </Link>
        </li>
        <li>
          <Link
            href="/admin"
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
