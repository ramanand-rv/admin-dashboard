import { updateProduct } from '@/app/lib/actions';
import { fetchProduct } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/products/productDescriptionPage/productDescriptionPage.module.css';
import Image from 'next/image';

const productDescriptionPage = async ({ params }: any) => {
    const { id } = params;
    const product: any = await fetchProduct(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={product.img || '/user.png'} alt='product image'
                        fill
                    />
                </div>
                Tony Stark
            </div>

            <div className={styles.formContainer}>
                <form action={updateProduct} className={styles.form}>
                    <input type="hidden" name="id" value={product.id} />

                    <label>Title</label>
                    <input type="text" name="title" placeholder={product.title} />
                    <label>Price</label>
                    <input type="text" name="price" placeholder={product.price} />
                    <label>Stock</label>
                    <input type="number" name="stock" placeholder={product.stock} />
                    <label>Color</label>
                    <input type="text" name="color" placeholder={product.color} />
                    <label>Size</label>
                    <input type="text" name="size" placeholder={product.size} />

                    <select name="category" id="category" >
                        <option disabled selected hidden value="general" >Choose a Category</option>
                        <option value="electronics" selected={product.category==='electronics'}>Electronics</option>
                        <option value="fashion" selected={product.category === 'fashion'}>Fashion</option>
                        <option value="books" selected={product.category === 'books'}>Books</option>
                        <option value="accessories" selected={product.category === 'accessories'}>Accessories</option>
                        <option value="homeapp" selected={product.category === 'homeapp'}>Home Appliances</option>
                    </select>

                    <label>Description</label>
                    <textarea name="desciption" placeholder={product.description} />
                    <button type='submit'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default productDescriptionPage