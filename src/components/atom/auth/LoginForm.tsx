import { FC, useState } from 'react'
import { auth } from '../../../utils/firebase'
import AuthForm from './AuthForm'

const LoginForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await auth.signInWithEmailAndPassword(email, password)
            setSuccess(true)
        } catch (err) {
            alert(err.messsage)
        }
    }
    return (
        <div>
            <h1>This is LoginForm</h1>
            <AuthForm email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                buttonLabel="Login" />
            <div>
                {success ? 'Login Success!' : null}
            </div>
        </div>
    )
}

export default LoginForm