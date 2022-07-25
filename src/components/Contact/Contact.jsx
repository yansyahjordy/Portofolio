import React from "react";
import Icons from "../Icons/Icons";
import styles from "./Contact.module.scss"
export default function Contact() {
  return (
    <section>
      <div className={`container d-flex justify-content-center text-center flex-column my-5 py-5`}>
          <h1 className="mb-5">Contact Me</h1>
        <div className={`offset-1 col-10 ${styles.Contact} rounded-5 py-5`}>
          <div className="row">
            <div className="col-10 offset-1 d-flex justify-content-between align-items-center">
              <Icons src="phone.png" size="big"></Icons>
              <Icons src="gmail.png" size="big"></Icons>
              <Icons src="codepen.png" size="big"></Icons>
              <Icons src="github.png" size="big"></Icons>
              <Icons src="gitlab.png" size="big"></Icons>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
