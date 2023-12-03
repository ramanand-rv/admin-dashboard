import styles from '@/app/ui/loginPage/loginPage.module.css';
import LoginForm from './loginForm/loginForm';

const LoginPage = () => {
    return (
        <div className={styles.container}>
            <LoginForm />
        </div>
    )
}

export default LoginPage