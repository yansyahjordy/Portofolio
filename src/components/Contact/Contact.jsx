import React, { useEffect } from "react";
import Icons from "../Icons/Icons";
import styles from "./Contact.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";

export default function Contact() {
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
    <section ref={ref}>
      <motion.div
        className={`container d-flex justify-content-center text-center flex-column my-5 py-5`}
        animate={animation}
      >
        <h1 className="mb-5">Contact Me</h1>
        <div
          className={`col-12 offset-md-1 col-md-10 ${styles.Contact} rounded-5 py-5`}
        >
          <div className="row">
            <div className="col-12 offset-lg-1 col-lg-10 ">
              <div className="row justify-content-between align-items-center gy-5">
                <div className="col-6 col-lg-2  d-flex justify-content-center">
                  <a href="https://wa.me/6281310256605" target="_blank">
                    <Icons src="phone.png" size="big"></Icons>
                  </a>
                </div>
                <div className="col-6 col-lg-2 d-flex justify-content-center">
                  <a href="mailto:yansyahjordy@gmail.com" target="_blank">
                    <Icons src="gmail.png" size="big"></Icons>
                  </a>
                </div>
                <div className="col-6 col-lg-2 d-flex justify-content-center">
                  <a href="https://codepen.io/yansyahjordy" target="_blank">
                    <Icons src="codepen.png" size="big"></Icons>
                  </a>
                </div>
                <div className="col-6 col-lg-2 d-flex justify-content-center">
                  <a href="https://github.com/yansyahjordy" target="_blank">
                    <Icons src="github.png" size="big"></Icons>
                  </a>
                </div>
                <div className="col-6 col-lg-2 d-flex justify-content-center">
                  <a href="https://gitlab.com/yansyahjordy" target="_blank">
                    <Icons src="gitlab.png" size="big"></Icons>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
