'use client'
import { usePathname } from 'next/navigation';
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from 'react-icons/md';
import styles from './navbar.module.css';
import Link from 'next/link';

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split('/').pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder='Search...' className={styles.input} />
        </div>
        <div className={styles.icons}>
          <div className={styles.chatIcon}>
            <Link href={'https://twitter.com/pyaracetamol0mg'}>
              <MdOutlineChat size={20} />
            </Link>
          </div>
          <div className={styles.notificationIcon}>
            <Link href={'https://www.linkedin.com/in/ramanand-rv/'}>
              <MdNotifications size={20} />
            </Link>
          </div>
          <div className={styles.publicIcon}>
            <Link href={'https://www.github.com/ramanand-rv'}>
              <MdPublic size={20} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;