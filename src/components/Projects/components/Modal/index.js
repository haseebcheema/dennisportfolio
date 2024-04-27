import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';
import Image from 'next/image';
import {motion} from 'framer-motion';
import gsap from 'gsap';

function index({modal, projects}) {

    // destructure the modal state
    const {active, index} = modal;

    // refs for the modal container, cursor and cursor label
    const modalContainer = useRef(null);
    const cursor = useRef(null);
    const cursorLabel = useRef(null);
    

    // move the modal with the cursor
    useEffect( () => {
        //Move Container
        let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"})
        let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"})
        //Move cursor
        let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"})
        let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"})
        //Move cursor label
        let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"})
        let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"})
    
        window.addEventListener('mousemove', (e) => {
          const { pageX, pageY } = e;
          xMoveContainer(pageX)
          yMoveContainer(pageY)
          xMoveCursor(pageX)
          yMoveCursor(pageY)
          xMoveCursorLabel(pageX)
          yMoveCursorLabel(pageY)
        })
      }, [])

    // animation for the modal
    const scaleAnimation = {
        initial: {scale: 0, x:"-50%", y:"-50%"},
        enter: {scale: 1, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
        closed: {scale: 0, x:"-50%", y:"-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
    }

  return (
    <>
        <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
        <div style={{top: index * -100 + '%'}} className={styles.modalSlider}>
            {
                projects.map((project, index) => {
                    return <div key={`modal_${index}`} className={styles.modal}>
                        <Image src={`/images/${project.src}`} alt='image' width={300} height={0}/>
                        </div>
                })
            }
        </div>
        </motion.div>
        <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
        <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
    </>
  )
}

export default index;
