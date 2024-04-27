import React, { useState } from 'react';
import styles from './style.module.scss';
import Project from './components/Project';

function index() {

  // list of projects
  const projectsLists = [
    {
      title: 'TWICE',
      src: '../../../public/images/thumbnail-twice.jpg',
      type: 'Interaction & Development'
    },
    {
      title: 'The Damai',
      src: '../../../public/images/thumbnail-thedamai-v2.jpg',
      type: 'Design & Development'
    },
    {
      title: 'FABRIC™',
      src: '../../../public/images/thumbnail-fabric-darkgray.jpg',
      type: 'Design & Development'
    },
    {
      title: 'Aaanstekelijk',
      src: '../../../public/images/thumbnail-aanstekelijk.jpg',
      type: 'Design & Development'
    }
  ]

  // state for the modal
  const [modal, setModal] = useState({active: false, index: 0});

  return (
    <main className={styles.main}>
      <div className={styles.body}>
      <h6>RECENT WORK</h6>
        {
          projectsLists.map((project, index) => {
            return <Project key={index} index={index} title={project.title} type={project.type} setModal={setModal}/>
          })
        }
      </div>
    </main>
  )
}

export default index;
