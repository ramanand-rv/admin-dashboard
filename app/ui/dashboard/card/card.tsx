import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => (
  <div className={styles.container}>
    <MdSupervisedUserCircle size={24} />
    <div className={styles.texts}>
      <span className={styles.title}>Total Users</span>
      <span className={styles.number}> {Math.floor(Math.random() * 100)}</span>
      <span className={styles.detail}>
        <span className={styles.positive}>12%</span> more than previous week
      </span>
    </div>
  </div>
)

export default Card
