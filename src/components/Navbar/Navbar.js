import React from "react";
import Icons from "../Icons/Icons";
import styles from "./Navbar.module.scss";
function Navbar() {
  return (
    <>
      <div
        className="container-fluid fixed-top flex-row py-3"
        // style={{ backgroundColor: "#3D4763" }}
      >
        <div
          className={`container d-flex justify-content-between align-items-center ${styles.navbar}`}
        >
          <div className="logo">
            <h1>Portofolio</h1>
          </div>
          <div
            className={`nav justify-content-between align-items-center gap-4 ${styles.navLink} d-none d-lg-flex`}
          >
            <p className={`${styles.active}`}>Home</p>
            <p>Skills</p>
            <p>Project</p>
            <p>Contact</p>
          </div>
          <div className="icons d-flex justify-content-between align-items-center gap-2">
            <div className="icon">
              <a href="https://codepen.io/yansyahjordy" target="_blank">
                <Icons src="codepen.png" size="small"></Icons>
              </a>
            </div>
            <div className="icon">
              <a href="https://github.com/yansyahjordy" target="_blank">
                <Icons src="github.png" size="small"></Icons>
              </a>
            </div>
            <div className="icon">
              <a href="https://gitlab.com/yansyahjordy" target="_blank">
                <Icons src="gitlab.png" size="small"></Icons>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
