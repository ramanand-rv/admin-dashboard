import { auth, signOut } from '@/app/auth';
import Image from 'next/image';
import {
  MdAnalytics,
  MdAttachMoney,
  MdDashboard,
  MdHelpCenter,
  MdLogout,
  MdOutlineSettings,
  MdPeople,
  MdShoppingBag,
  MdSupervisedUserCircle,
  MdWork,
} from 'react-icons/md';
import MenuLink from './menuLink/menuLink';
import styles from './sidebar.module.css';
const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <MdDashboard />
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: <MdSupervisedUserCircle />
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: <MdShoppingBag />
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: <MdAttachMoney />
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '',
        icon: <MdWork />
      },
      {
        title: 'Reports',
        path: '',
        icon: <MdAnalytics />
      },
      {
        title: 'Teams',
        path: 'https://www.instagram.com/ramanand_rv/',
        icon: <MdPeople />
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '',
        icon: <MdOutlineSettings />,
      },
      {
        title: 'Help',
        path: 'https://www.linkedin.com/in/ramanand-rv/',
        icon: <MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = async () => {
  const { user }: any = await auth();
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image className={styles.userImage}
          alt='User image'
          src={user.img || "/user.png"}
          width={50}
          height={50} />
        <div className={styles.userDetails}>
          <span className={styles.username}>{user.username}</span>
          <span className={styles.userTitle}>Admin</span>
        </div>
      </div>

      <ul className={styles.list}>
        {menuItems.map(category => (
          <li key={category.title}>
            <span className={styles.category}>{category.title}</span>
            {category.list?.map(item => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <form action={async () => {
        'use server'
        await signOut();
      }}>
        <button className={styles.logoutbtn}>
          <MdLogout />
          Logout
        </button>
      </form>
    </div>
  );
};

export default Sidebar
