import Image from 'next/image';
import styles from './transaction.module.css';

const Transaction = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <Image alt='' src='/user.png' width={40} height={40} className={styles.userImage} />
              Tony Stark
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>Pending</span>
            </td>
            <td>11/11/1999</td>
            <td>INR. 10000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
