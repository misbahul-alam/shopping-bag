import MainLayout from "@/components/layouts/MainLayout";
import React from "react";
export default function Home() {
  return (
    <MainLayout>
      <div className="flex flex-col gap-4 bg-[url(../images/hero.png)] w-screen bg-cover bg-no-repeat  bg-center py-24 layout">
        <h1 className="text-2xl font-bold">Shopping Bag</h1>
        <p className="text-gray-700 text-sm">
          A shopping bag app built with Next.js and Chakra UI
        </p>
      </div>
    </MainLayout>
  );
}
