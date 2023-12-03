'use client'
import { authenticate } from '@/app/lib/actions';
import styles from '@/app/ui/loginPage/loginForm/loginForm.module.css';
import { useFormState } from 'react-dom';

const LoginForm = () => {
    const [state, formAction] = useFormState(authenticate, undefined)
    const handleLogin = async (formData: any) => {
        const data: any = await authenticate(formData);
    }
    return (
        <form action={formAction} className={styles.form}>
            <h1>Login</h1>
            <input type="text" name="username" placeholder='Username' autoComplete="username"
            />
            <input type="password" name="password" placeholder='Password' autoComplete="current-password"
            />
            <button type="submit">Login</button>
            {state && state}
        </form>
        
        )
}

export default LoginForm