import { FC, useState } from 'react'
import LoginButton from '../atom/auth/LoginButton'
import SignUpButton from '../atom/auth/SignUpButton'
import LogoutButton from '../atom/auth/LogoutButton'
const UserAuth: FC = () => {
    return (
        <div>
            <LoginButton />
            <SignUpButton />
            <LogoutButton />
        </div>
    )
}

export default UserAuth