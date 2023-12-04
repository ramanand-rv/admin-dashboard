import styles from '@/app/ui/loginPage/loginPage.module.css';
import LoginForm from '../ui/loginPage/loginForm/loginForm/loginForm';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default LoginPage