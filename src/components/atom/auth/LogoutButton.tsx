import { FC, useState } from 'react'
import { auth } from '../../../utils/firebase'

const LogoutButton: FC = () => {
    const logout = async () => {
        try {
            await auth.signOut()
        } catch (err) {
            alert(err.message)
        }
    }
    return (
        <div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}
export default LogoutButton