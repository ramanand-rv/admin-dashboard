import Image from 'next/image';
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './rightbar.module.css';


const RightBar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer1}>
          <Image
          className={styles.bg}
            alt='Available now image'
            src='/anow.png'
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🔥 Available Now</span>
          <h3 className={styles.subtitle}>How to use the new version of the admin dashboard</h3>
          <span className={styles.title}>Takes 4 minutes to learn</span>
          <p className={styles.description}>Welcome to the guide on how to use the new version of the admin dashboard. This tutorial will help you navigate through the updated features and functionalities with ease.</p>
          <button className={styles.button}><MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div> 

      <div className={styles.item}>
        <div className={styles.bgContainer2}>
          <Image
            className={styles.bg}
            alt='coming soon image'
            src='/cnext.png'
            fill
          />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>🚀 Coming Soon</span>
          <h3 className={styles.subtitle}>New server actions are available, partial pre-renderning is coming up soon</h3>
          <span className={styles.title}>Takes 4 minutes to learn</span>
          <p className={styles.description}>Embrace the future of web development! New server actions are now available, and the game-changing feature of partial pre-rendering is coming soon. Stay tuned!</p>
          <button className={styles.button}><MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
    </div>
  )
}

export default RightBar
