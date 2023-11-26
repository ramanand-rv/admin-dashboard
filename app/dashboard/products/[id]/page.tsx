import styles from '@/app/ui/dashboard/products/productDescriptionPage/productDescriptionPage.module.css';
import Image from 'next/image';

const productDescriptionPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image alt='user image' src='/user.png'
                        fill
                    />
                </div>
                Tony Stark
            </div>

            <div className={styles.formContainer}>
                <form action="" className={styles.form}>

                    <label>Title</label>
                    <input type="text" name="title" placeholder='Pixel' />
                    <label>Price</label>
                    <input type="text" name="price" placeholder='65000' />
                    <label>Stock</label>
                    <input type="number" name="stock" />
                    <label>Color</label>
                    <input type="text" name="color" placeholder='Red' />
                    <label>Size</label>
                    <input type="text" name="size" placeholder='Large' />

                    <select name="category" id="category" >
                        <option disabled selected hidden value="general" >Choose a Category</option>
                        <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="books">Books</option>
                        <option value="accessories">Accessories</option>
                        <option value="homeapp">Home Appliances</option>
                    </select>

                    <label>Description</label>
                    <textarea name="desciption" placeholder='Pixel Description' />
                    <button type='submit'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default productDescriptionPage