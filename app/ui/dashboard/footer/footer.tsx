import Link from 'next/link';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Data Dungeon made with ♥ by  <Link href='https://www.linkedin.com/in/ramanand-rv/'>
        Ramanand Thakur
      </Link> </div>
      <div className={styles.text}>© All Rights Reserved.</div>
    </div>
  )
}

export default Footer
