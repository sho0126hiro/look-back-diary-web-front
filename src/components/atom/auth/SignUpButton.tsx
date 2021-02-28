import { FC, useState } from 'react'
import SignUpForm from './SignUpForm'


const SignUpButton: FC = () => {
    const [FormIsView, setFormIsView] = useState<boolean>(false)
    return (
        <div>
            <button onClick={() => setFormIsView(true)}>SignUp</button>
            <button onClick={() => setFormIsView(false)}>Cancel</button>
            <div>
                {FormIsView && <SignUpForm />}
            </div>
        </div>
    )
}

export default SignUpButton