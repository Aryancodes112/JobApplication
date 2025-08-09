import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet /> {/* 👈 This renders the correct page based on the route */}
      <Footer />
    </>
  );
};

export default Layout;
