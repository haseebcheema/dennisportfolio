import React from 'react';
import styles from './style.module.scss'

function index({index, title, type, setModal}) {

  return (
    <div className={styles.main}>
        <div onMouseEnter={() => {setModal({active: true, index: index})}} onMouseLeave={() => {setModal({active: false, index: index})}} className={styles.project}>
            <h2> {title} </h2>
            <p> {type} </p>
        </div>
    </div>
  )
}

export default index;
