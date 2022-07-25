import React from "react";
import Icons from "../Icons/Icons";
import styles from "./Skills.module.scss";

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <div className={`container d-flex justify-content-center text-center py-5 my-5`}>
        <div className="">
          <h1 className="mb-5">Skills</h1>
          <div className={`offset-1 col-10 ${styles.Skills} rounded-5 py-5`}>
            <div className="row g-5">
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="html.png" size="big"></Icons>
                <Icons src="css.png" size="big"></Icons>
                <Icons src="js.png" size="big"></Icons>
                <Icons src="typescript.png" size="big"></Icons>
              </div>
              <div className="offset-1 col-10 d-flex justify-content-between align-items-center">
                <Icons src="vscode.png" size="big"></Icons>
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
