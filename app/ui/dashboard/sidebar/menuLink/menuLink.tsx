import Link from 'next/link';
import styles from './menuLink.module.css';

const MenuLink = ({item}: any) => {
  return (
    <Link href={item.path} className={styles.container}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
