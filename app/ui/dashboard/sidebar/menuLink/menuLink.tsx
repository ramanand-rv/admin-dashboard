'use client'
import Link from 'next/link';
import styles from './menuLink.module.css';
import { usePathname } from 'next/navigation';

const MenuLink = ({item}: any) => {
  const pathneame = usePathname();
  return (
    <Link href={item.path} className={`${styles.container} ${pathneame == item.path && styles.active}`}>
      {item.icon}
      {item.title}
    </Link>
  )
}

export default MenuLink
