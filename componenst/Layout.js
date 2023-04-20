import Navbar from "./Navbar";
import Head from "next/head";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import NProgress from "nprogress";

const Layout = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(url);
      NProgress.start();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    router.events.on("routeChangeComplete", () => NProgress.done());

    setTimeout(() => {
      setIsVisible(true);
    }, 500);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
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
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h1 className="text-light">&copy; Homero Cabrera Araque</h1>
            <p>All rights Reserverd {new Date().getFullYear()}</p>
          </div>
        </footer>
      </motion.div>
    </>
  );
};

export default Layout;
