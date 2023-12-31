import { addProduct } from '@/app/lib/actions';
import styles from '@/app/ui/dashboard/products/addProducts/addProducts.module.css';

const AddProductsPage = () => {
  return (
    <div className={styles.container}>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="Title" required />

        <select name="category" id="category" >
          <option disabled selected hidden value="general" >Choose a Category</option>
          <option value="electronics">Electronics</option>
          <option value="fashion">Fashion</option>
          <option value="books">Books</option>
          <option value="accessories">Accessories</option>
          <option value="homeapp">Home Appliances</option>
        </select>

        <input type="number" name="price" placeholder='Price' />
        <input type="number" name="stock" placeholder='Stock' />
        <input type="text" name="color" placeholder='Color' />
        <input type="text" name="size" placeholder='Size' />

        <textarea name="description" id="desc" rows={4} placeholder='Description'></textarea>

        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default AddProductsPage