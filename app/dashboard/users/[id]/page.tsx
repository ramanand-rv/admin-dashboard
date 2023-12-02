import { updateUser } from '@/app/lib/actions';
import { fetchUser } from '@/app/lib/data';
import styles from '@/app/ui/dashboard/users/userProfile/userProfile.module.css';
import Image from 'next/image';

const UserProfilePage = async ({ params }: any) => {
    const { id } = params;
    const user:any = await fetchUser(id);
    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imageContainer}>
                    <Image src={user.img || '/user.png'}
                        alt='user image'
                        fill
                    />
                </div>
                <div className={styles.usertitle}>
                    {user.username}
                </div>
            </div>

            <div className={styles.formContainer}>
                <form action={updateUser} className={styles.form}>
                    <input type="hidden" name="id" value={user.id} />

                    <label>Username</label>
                    <input type="text" name="username" placeholder={user.username} />
                    <label>Email</label>
                    <input type="email" name="email" placeholder={user.email} />
                    <label>Password</label>
                    <input type="password" name="password" />
                    <label>Mobile</label>
                    <input type="text" name="mobile" placeholder={user.phone} />
                    <label>Address</label>
                    <textarea name="address" placeholder={user.address} />
                    <label >Is Admin ?</label>
                    <select name="isAdmin">
                        <option value="true" selected={user.isAdmin === true}>Yes</option>
                        <option value="false" selected={user.isAdmin === false}>No</option>
                    </select>
                    <label >Is Active ?</label>
                    <select name="isActive">
                        <option value="true" selected={user.isActive===true}>Yes</option>
                        <option value="false" selected={user.isActive === false}>No</option>
                    </select>
                    <button type='submit'>Update</button>
                </form>


            </div>
        </div>
    )
}

export default UserProfilePage