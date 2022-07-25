import React from 'react'
import styles from "./Icons.module.scss";
export default function Icons({src,size}) {
  return (
    <div className={`${styles.iconContainer} ${styles[size]}`}>
        <img src={`/img/${src}`} alt="icon" />
    </div>
  )
}
