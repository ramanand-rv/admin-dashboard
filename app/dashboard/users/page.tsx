import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user' />
        <Link href='/dashboard/users/add'>
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created at</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.user}>
              <Image src='/user.png' className={styles.userImage} alt='user image' width={40} height={40}/>
              Tony stark
            </td>
            <td>tony_stark@gmail.com</td>
            <td>11.11.2023</td>
            <td>CEO</td>
            <td>Active</td>
            <td>
              <Link href='/'>
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.view}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default UsersPage;