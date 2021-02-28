import { Dispatch, FC, SetStateAction } from 'react'

type Props = {
    email: string
    password: string
    setEmail: Dispatch<SetStateAction<string>>
    setPassword: Dispatch<SetStateAction<string>>
    handleSubmit: (e: React.FormEvent) => Promise<void>
    buttonLabel: string
}

const AuthForm: FC<Props> = (props: Props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <label htmlFor="email">
                        Email: {' '}
                    </label>
                    <input id="email"
                        type="email"
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                </div>
                <div >
                    <label htmlFor="password">
                        Password:{' '}
                    </label>
                    <input
                        id="password"
                        type="password"
                        onChange={(e) => props.setPassword(e.target.value)}
                    />
                </div>
                <button type="submit">
                    {props.buttonLabel}
                </button>
            </form>
    )
}

export default AuthForm