import { fetchUsers } from '@/app/lib/data';
import Pagination from '@/app/ui/dashboard/pagination/pagination';
import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';
import Image from 'next/image';
import Link from 'next/link';

const UsersPage = async() => {
  const users = await fetchUsers();
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a user...' />
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
          {users.map(user => (

            <tr key={user.id}>
            <td className={styles.user}>
              <Image src={user.img || '/user.png'} className={styles.userImage} alt='user image' width={40} height={40} />
              {user.username}
            </td>
            <td>{user.email}</td>
            <td>{user.createdAt?.toString().slice(4, 16)}</td>
            <td>{user.isAdmin ? "Admin" : "Client"}</td>
            <td>{user.isActive ? "Active" : "Passive"}</td>
            <td>
              <div className={styles.buttons}>
                <Link href={`/dashboard/users/${user.id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        ))};
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default UsersPage;