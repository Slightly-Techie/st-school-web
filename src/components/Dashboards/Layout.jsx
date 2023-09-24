import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const Layout = ({ menus, children }) => {
  return (
    <div className="flex flex-col h-screen">
      <div className="navbar fixed inset-x-0 z-50 top-0 z-50">
        <Navbar />
      </div>
      <div className="flex h-screen" style={{ overflow: "hidden" }}>
        <div className="sidebar mt-8">
          <Sidebar Menus={menus} />
        </div>
        <div className="w-screen flex-1 mt-16 relative overflow-y-scroll">
          <div className="m-4">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
