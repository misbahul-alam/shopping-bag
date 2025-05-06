import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { HiMiniUserCircle } from "react-icons/hi2";
import {
  IoCartSharp,
  IoPeople,
  IoPeopleCircleSharp,
  IoPeopleSharp,
} from "react-icons/io5";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-50">
      <div className="layout h-8 w-full border-b border-gray-100 flex items-center justify-between bg-blue-600">
        <p className="text-gray-200 text-xs font-medium">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>
        <ul className="flex gap-4 items-center">
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              About Us
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              Contact Us
            </a>
          </li>
          <li className="flex items-center">
            <a href="" className="text-gray-200 text-xs ">
              Order Tracking
            </a>
          </li>
        </ul>
      </div>
      <div className="layout h-14 w-full border-b border-gray-100 flex items-center justify-between ">
        <div className="flex gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 uppercase font-medium text-4xl"
          >
            <img
              src="https://flowbite.com/images/logo.svg"
              alt="Logo"
              className="h-8 w-auto"
            />
            <h1 className="text-blue-600 text-2xl font-bold">
              Shopping<span className="text-gray-950 font-semibold">Bag</span>
            </h1>
          </Link>
          <ul className="flex items-center">
            <li className="flex items-center">
              <Link href="/" className="text-lg font-medium text-gray-800 px-2">
                Home
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/shop"
                className="text-lg font-medium text-gray-800 px-2"
              >
                Shop
              </Link>
            </li>
            <li className="flex items-center">
              <a href="" className="text-lg font-medium text-gray-800 px-2">
                Categories
              </a>
            </li>
            <li className="flex items-center">
              <Link
                href="/login"
                className="text-lg font-medium text-gray-800 px-2"
              >
                Login
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                href="/register"
                className="text-lg font-medium text-gray-800 px-2"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center gap-4 min-w-md">
          <form className="flex items-center  bg-gray-100 rounded-md h-10 max-w-md w-full">
            <input
              type="text"
              placeholder="Search proudcts.."
              className="border-none outline-none px-4 w-full h-full"
            />
            <button className="pr-3 cursor-pointer">
              <FiSearch className="text-gray-600 text-xl" />
            </button>
          </form>
          <div className="flex items-center gap-4">
            <button className="cursor-pointer">
              <IoCartSharp className="text-2xl text-gray-800" />
            </button>
            <button className="cursor-pointer">
              <HiMiniUserCircle className="text-2xl text-gray-800" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
