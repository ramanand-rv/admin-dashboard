import styles from '@/app/ui/dashboard/users/addUser/addUser.module.css';

const AddUserPage = () => {
  return (
      <div className={styles.container}>
          <form action="" className={styles.form}>
              <input type="text" name="username" placeholder="Username" required />
              <input type="email" name="email" placeholder='Email' />
              <input type="password" name="password" placeholder='Password' />
              <input type="number" name="mobile" placeholder='Mobile Number' />

              <select name="isAdmin" id="isAdmin" required>
                  <option value='false' disabled selected hidden>Is Admin ?</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
              </select>
              <select name="isActive" id="isActive" >
                  <option value='false' disabled selected hidden>Is Active ?</option>
                  <option value='true'>Yes</option>
                  <option value='false'>No</option>
              </select>

              <textarea name="address" id="address" rows={4} placeholder='Address'></textarea>
              <button type='submit'>Submit</button>
          </form>
      </div>  )
}

export default AddUserPage