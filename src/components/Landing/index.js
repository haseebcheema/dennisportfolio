import React from 'react';
import Image from 'next/image';
import styles from './style.module.scss';

function index() {
  return (
    <div>
      <main className={styles.landing}>
      <Image
        src="/images/DSC07033.jpg" 
        fill={true}
        alt="personal-image"
      />
      <div className={styles.slidercontainer}>
        <div className=''>
            <p>Freelance Developer</p>
            <p>Freelance Developer</p>
        </div>
      </div>
      </main>
    </div>
  )
}

export default index;
