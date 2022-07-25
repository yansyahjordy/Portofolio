import React from "react";
import Icons from "../Icons/Icons";
import styles from "./Navbar.module.scss"
function Navbar() {
  return (
    <>
      <div className="container-fluid fixed-top flex-row py-3">
        <div className={`container d-flex justify-content-between align-items-center ${styles.navbar}`}>
          <div className="logo">
            <h1>Portofolio</h1>
          </div>
          <div className={`nav d-flex justify-content-between align-items-center gap-4 ${styles.navLink}`}>
            <p>Home</p>
            <p>Skills</p>
            <p>Project</p>
            <p>Contact</p>
          </div>
          <div className="icons d-flex justify-content-between align-items-center gap-2">
            <div className="icon">
              <Icons src="codepen.png" width="60px" padding="10px"></Icons>
            </div>
            <div className="icon">
              <Icons src="github.png" width="60px" padding="10px"></Icons>
            </div>
            <div className="icon">
              <Icons src="gitlab.png" width="60px" padding="10px"></Icons>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
