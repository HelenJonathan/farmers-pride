
import AdminNavbar from "./components/AdminNavbar"
import AdminSidebar from "./components/AdminSidebar"
import { Nav, NavLink } from "@/components/Nav"
import { useState } from 'react';


  
export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) 
 {
    // const [sidebarOpen, setSidebarOpen] = useState(true);
  
    // const toggleSidebar = () => {
    //   setSidebarOpen(!sidebarOpen);
    // };
  


  return (
  
      <>
      <div className="fixed w-full z-50">
      <AdminNavbar />
      <Nav>
        <NavLink href="/admin">Dashboard</NavLink>
        <NavLink href="/admin/products">Products</NavLink>
        <NavLink href="/admin/users">Customers</NavLink>
        <NavLink href="/admin/orders">Sales</NavLink>
      </Nav>
      </div>
      <AdminSidebar />
        <div className="ml-48 bg-[#f1f1f1] pt-32 transition-all duration-300">
          <div className="bg-[#f1f1f1] my-62 overflow-y-auto max-h-screen">
            {children}
          </div>
        </div>
      </>
  )
}
