import Pagination from '@/app/ui/dashboard/pagination/pagination';
import styles from '@/app/ui/dashboard/products/products.module.css';
import Search from '@/app/ui/dashboard/search/search';
import Image from 'next/image';
import Link from 'next/link';

function ProductsPage() {
  return (

    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder='Search for a product...' />
        <Link href='/dashboard/products/add'>
          <button className={styles.addBtn}>Add New</button>
        </Link>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Titles</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created at</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={styles.product}>
              <Image src='/noproduct.png' className={styles.productImage} alt='product image' width={40} height={40} />
              Pixel
            </td>
            <td>Pixel Description</td>
            <td>INR 54000</td>
            <td>27.07.2023</td>
            <td>11</td>
            <td>
              <div className={styles.buttons}>
                <Link href='/'>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination />
    </div>
  )
}

export default ProductsPage