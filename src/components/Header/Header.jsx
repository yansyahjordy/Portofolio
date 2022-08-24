import React from "react";
import styles from "./Header.module.scss";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <section
      className={styles.headerSection}
      id="home"
      style={{ padding: "130px 0 130px 0" }}
    >
      <motion.div
        className="container"
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 1,
        }}
      >
        <div className="row align-items-center justify-content-lg-end">
          <div className="col-sm-12 col-lg-7">
            <h2 className="pb-4">Welcome to my Portofolio</h2>
            <motion.h1 className="pb-3" whileHover={{ scale: 1.1 }}>
              Hi, I’m M Jordi Yansya
            </motion.h1>
            <h3 className="pb-4">Aspiring Web Developer</h3>
            <p className="">
              Engineering graduate that loves tech. Always excited to learn,
              experience new things and stay open-minded. Seeking to put into
              use my abilities, education and passion to the right organization
              or institution which could provide myself with ripe opportunities
              and a great prospect.
            </p>
          </div>
          <div className="col-sm-7 col-lg-5 offset-sm-5 offset-lg-0">
            <motion.div className="img" whileHover={{ scale: 1.05 }}>
              <img src="/img/logo-jordy.png" alt="logo" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
