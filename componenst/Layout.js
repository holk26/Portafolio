import Navbar from "./Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 500);
  }, []);

  return (
    <>
      <Head>
        <title>My portafolio</title>
      </Head>
      <Navbar />
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: isVisible ? 0 : -50, opacity: isVisible ? 1 : 0 }}
      >
        <main className="container py-4">{children}</main>
      </motion.div>
    </>
  );
};

export default Layout;
