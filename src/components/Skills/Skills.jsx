import React, { useEffect, useRef } from "react";
import { useState } from "react";
import Icons from "../Icons/Icons";
import styles from "./Skills.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Skills() {
  const { ref, inView: visible } = useInView({
    threshold: 0.1,
  });
  const animation = useAnimation();

  useEffect(() => {
    if (visible) {
      animation.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!visible) {
      animation.start({ x: "-100vw" });
    }
  }, [visible]);

  return (
    <section className="skills" id="skills" ref={ref}>
      <div
        className={`container d-flex justify-content-center text-center py-5 my-5`}
      >
        <motion.div animate={animation}>
          <h1 className="mb-5">Skills</h1>
          <div
            className={`col-12 offset-md-1 col-md-10 ${styles.Skills} rounded-5 py-5`}
          >
            <div className="row g-5">
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="html.png" size="big"></Icons>
                <Icons src="css.png" size="big"></Icons>
                <Icons src="js.png" size="big"></Icons>
                <Icons src="typescript.png" size="big"></Icons>
              </div>
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="redux.png" size="big"></Icons>
                <Icons src="react.png" size="big"></Icons>
                <Icons src="nextjs.png" size="big"></Icons>
                <Icons src="git.png" size="big"></Icons>
              </div>
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="figma.png" size="big"></Icons>
                <Icons src="bootstrap.png" size="big"></Icons>
                <Icons src="tailwind.png" size="big"></Icons>
                <Icons src="sass.png" size="big"></Icons>
              </div>
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="postman.png" size="big"></Icons>
                <Icons src="nodejs.png" size="big"></Icons>
                <Icons src="expresssm.png" size="big"></Icons>
                <Icons src="vscode.png" size="big"></Icons>
              </div>
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="php.png" size="big"></Icons>
                <Icons src="laravel.png" size="big"></Icons>
                <Icons src="mysql.png" size="big"></Icons>
                <Icons src="mongodb.png" size="big"></Icons>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
