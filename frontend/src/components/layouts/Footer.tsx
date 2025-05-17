import React from "react";
import PaymentImage from "@/images/payments.png";
import PlayStoreImage from "@/images/android.png";
import AppStoreImage from "@/images/apple.png";
import Image from "next/image";
import { FaFacebookF, FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer>
      <div className="layout grid lg:grid-cols-[1.5fr_1fr_1fr_1fr] grid-cols-1 gap-5 pb-5 pt-8 bg-slate-100">
        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-950">
            Do You Need Help?
          </h2>
          <p className="text-base text-slate-600 mb-2">
            A shopping bag app built with Next.js, Nest.js, TypeORM and Chakra
            UI
          </p>
          <h3 className="text-slate-800">Follow us on social media:</h3>
          <div className="flex gap-2 mt-2">
            <div className="flex items-center justify-center bg-white rounded-sm h-9 aspect-square cursor-pointer shadow-sm">
              <FaFacebookF className="text-xl text-blue-600" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-sm h-9 aspect-square cursor-pointer shadow-sm">
              <FaGithub className="text-xl text-gray-800" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-sm h-9 aspect-square cursor-pointer shadow-sm">
              <FaYoutube className="text-xl text-red-600" />
            </div>
            <div className="flex items-center justify-center bg-white rounded-sm h-9 aspect-square cursor-pointer shadow-sm">
              <FaLinkedinIn className="text-xl text-sky-700" />
            </div>
          </div>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-950">
            Let Us Help You
          </h2>
          <ul>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Headphone
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Computers
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Labtop & Desktop
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Automations
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Digital Cameras
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Headphone
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-950">
            Useful Links
          </h2>
          <ul>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Headphone
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Computers
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Labtop & Desktop
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Automations
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Digital Cameras
              </a>
            </li>
            <li>
              <a href="" className="text-base text-slate-600 py-0.5 block">
                Headphone
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-2 text-slate-950">
            Download our app
          </h2>
          <p className="text-base text-slate-600 mb-2">
            Download our app and get the best deals on your shopping.
          </p>
          <div className="space-y-2 mb-2">
            {" "}
            <Image
              alt="Play Store"
              src={PlayStoreImage}
              className="h-12 w-auto cursor-pointer"
            />
            <Image
              alt="App Store"
              src={AppStoreImage}
              className="h-12 w-auto cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="layout h-10 w-full border-t border-slate-200 flex items-center justify-between bg-slate-100 flex-col-reverse md:flex-row gap-2">
          <p className="text-slate-800 text-sm font-medium">
            © 2025 Shopping Bag. All rights reserved.
          </p>
          <Image src={PaymentImage} alt="Payment Methods" />
        </div>
      </div>
    </footer>
  );
}
