import AdminLayout from "@/components/layouts/AdminLayout";
import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <AdminLayout>{children}</AdminLayout>;
}
