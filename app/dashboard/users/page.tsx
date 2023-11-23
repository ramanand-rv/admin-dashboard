import Search from '@/app/ui/dashboard/search/search';
import styles from '@/app/ui/dashboard/users/users.module.css';

function UsersPage() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search />
      </div>
      <table className={styles.table}>

      </table>
    </div>
  )
}

export default UsersPage;