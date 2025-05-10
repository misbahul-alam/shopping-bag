import React, { ReactNode } from "react";
import Link from "next/link";

type LayoutProps = {
  children: ReactNode;
};

const AdminLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <div className="h-14 bg-white border-b border-gray-200 w-full z-50 top-0 sticky flex items-center justify-between px-4">
        How Can I hep
      </div>
      <div className="drawer md:drawer-open bg-gray-100">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <main className="px-3 py-2">{children}</main>
        </div>
        <div className="drawer-side top-14 border-r border-gray-200">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-white text-base-content h-full w-80 ">
            {/* Sidebar content here */}
            <li>
              <a>Sidebar Item 1</a>
            </li>
            <li>
              <a>Sidebar Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
