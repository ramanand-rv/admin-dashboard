'use client'
import { usePathname } from 'next/navigation';
import styles from './navbar.module.css';
import {MdNotifications, MdOutlineChat, MdPublic, MdSearch} from 'react-icons/md'

const  Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder='Search...' className={styles.imput} />
        </div>
        <div className={styles.icon}>

        </div>
          <MdOutlineChat size={20} />
          <MdNotifications />
          <MdPublic size={20} />
      </div>
    </div>
  )
}

export default Navbar;