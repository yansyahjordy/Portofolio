import React from "react";
import styles from "./Header.module.scss"
export default function Header() {
  return (
    <section className={styles.headerSection} id="home" style={{padding:"130px 0 130px 0"}}>
      <div className="container">
        <div className="row align-items-center justify-content-lg-end">
          <div className="col-sm-12 col-lg-7">
            <h2 className="pb-4">Welcome to my Portofolio</h2>
            <h1 className="pb-3">Hi, I’m M Jordi Yansya</h1>
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
            <div className="img">
              <img src="/img/logo-jordy.png" alt="logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
