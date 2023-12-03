import styles from '@/app/ui/loginPage/loginPage.module.css';
import { authenticate } from '../lib/actions';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <form action={authenticate} className={styles.form}>
                <h1>Login</h1>
                <input type="text" name="username" placeholder='Username' autoComplete="username"
                />
                <input type="password" name="password" placeholder='Password' autoComplete="current-password"
                />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default LoginPage