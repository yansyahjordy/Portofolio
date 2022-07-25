import React from 'react'
import styles from "./Icons.module.scss";
export default function Icons({src,width,padding}) {
  return (
    <div className={styles.iconContainer} style={{width:width,padding:padding}}>
        <img src={`/img/${src}`} alt="icon" />
    </div>
  )
}
