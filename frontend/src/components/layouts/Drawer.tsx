"use client";

import { useUIStore } from "@/store/useUIStore";
import Link from "next/link";
import { IoClose } from "react-icons/io5";

export default function Drawer() {
  const { isDrawerOpen, closeDrawer } = useUIStore();
  return (
    <>
      <div
        className={
          isDrawerOpen
            ? "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50"
            : "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50 hidden"
        }
        onClick={closeDrawer}
      ></div>

      <div
        className={
          isDrawerOpen
            ? "top-0 bottom-0 left-0 w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
            : "top-0 bottom-0 -left-[85vw] w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
        }
      >
        <div className="layout h-14 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center gap-2 uppercase font-medium text-4xl">
            <img
              src="https://flowbite.com/images/logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-blue-600 text-2xl font-bold">
              Shopping<span className="text-gray-950 font-semibold">Bag</span>
            </h1>
          </div>
          <button onClick={closeDrawer}>
            <IoClose className="text-2xl text-gray-800" />
          </button>
        </div>
        <div>
          <ul>
            <li>
              <Link
                href={"/"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"/shop"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all"
              >
                Shop
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all"
              >
                Categories
              </Link>
            </li>
            <li>
              <Link
                href={"/login"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                href={"/register"}
                onClick={closeDrawer}
                className="text-lg px-4 py-2 block  font-medium text-gray-700 transition-all"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
