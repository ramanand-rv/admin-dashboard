import styles from '@/app/ui/dashboard/users/userProfile/userProfile.module.css';
import Image from 'next/image';

const UserProfilePage = () => {
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

                    <label>Username</label>
                    <input type="text" name="username" placeholder='Tony Stark' />
                    <label>Email</label>
                    <input type="email" name="email" placeholder='tony_stark@gmail.com' />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Mobile</label>
                    <input type="text" name="mobile" placeholder='+91 8734238278' />
                    <label>Address</label>
                    <textarea name="address" placeholder='Shaitan Galli, Khatra Mahal' />
                    <label >Is Admin ?</label>
                    <select name="isadmin">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <label >Is Active ?</label>
                    <select name="isactive">
                        <option value="true">Yes</option>
                        <option value="false">No</option>
                    </select>
                    <button type='submit'>Submit</button>
                </form>


            </div>
        </div>
    )
}

export default UserProfilePage