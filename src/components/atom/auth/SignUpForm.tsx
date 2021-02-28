import { FC, useState } from 'react'
import { auth } from '../../../utils/firebase'
import AuthForm from './AuthForm'

const SignUpForm: FC = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [success, setSuccess] = useState<boolean>(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
            await auth.createUserWithEmailAndPassword(email, password)
            setSuccess(true)
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <div>
            <h1>This is SignUpForm</h1>
            <AuthForm email={email}
                password={password}
                setEmail={setEmail}
                setPassword={setPassword}
                handleSubmit={handleSubmit}
                buttonLabel="SignUp" />
            <div>
                {success ? 'SignUp Success!' : null}
            </div>
        </div>
    )
}

export default SignUpForm