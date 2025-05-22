"use client";

import { useUIStore } from "@/store/useUIStore";
import { IoClose } from "react-icons/io5";

export default function AddToCart() {
  const { isCartOpen, closeCart } = useUIStore();
  return (
    <>
      <div
        className={
          isCartOpen
            ? "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50"
            : "top-0 bottom-0 left-0 right-0 fixed bg-black/20 z-50 hidden"
        }
        onClick={closeCart}
      ></div>

      <div
        className={
          isCartOpen
            ? "top-0 bottom-0 right-0 w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
            : "top-0 bottom-0 -right-[85vw] w-[85vw] max-w-[300px] fixed z-50 bg-white transition-all"
        }
      >
        <div className="layout h-14 border-b border-gray-200 flex items-center justify-between">
          <h1 className="text-gray-800 text-[1.35rem] font-semibold uppercase">
            Add To Cart
          </h1>
          <button onClick={closeCart}>
            <IoClose className="text-2xl text-gray-800" />
          </button>
        </div>
      </div>
    </>
  );
}
