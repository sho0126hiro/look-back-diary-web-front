import { FC, useState } from 'react'
import LoginForm from './LoginForm'


const LoginButton: FC = () => {
    const [FormIsView, setFormIsView] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setFormIsView(true)}>Login</button>
            <button onClick={() => setFormIsView(false)}>Cancel</button>
            <div>
                {FormIsView && <LoginForm />}
            </div>
        </div>
    )
}

export default LoginButton