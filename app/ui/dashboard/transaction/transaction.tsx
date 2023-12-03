import Image from 'next/image';
import styles from './transaction.module.css';
import { fetchUsers } from '@/app/lib/data';

// const status ={
//   [
//     ,
//     
//   ],
              
// }

const Transaction = async () => {
  const { count, users } = await fetchUsers("", 1);
  const transUsers = users.slice(0, 4);
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
          {transUsers.map(user => (
            <>
              <tr key={user.id}>
                <td>
                  <div className={styles.user}>
                    <Image alt='' src={user.img || '/user.png'} width={40} height={40} className={styles.userImage} />
                    {user.username}
                  </div>
                </td>
                <td>
                  {
                    user.img ?
                      user.isAdmin ? 
                        <span className={`${styles.status} ${styles.done}`}> Done</span>
                      :
                        <span className={`${styles.status} ${styles.pending}`}>Pending</span>
                    :
                      <span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span>
                  }
                  
                </td>
                <td>{user.createdAt?.toString().slice(4, 16)}</td>
                <td>INR. {parseFloat((Math.random()).toFixed(4)) * 100000}</td>
              </tr>


            </>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Transaction
