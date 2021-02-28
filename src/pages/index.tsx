import { FC } from 'react'
import UserAuth from '../components/molecules/UserAuth'

const Home: FC = (props: any) => {
    return (
        <div>
            <h1>Hello World</h1>
            <div>
                <UserAuth />
            </div>
        </div>
    )
}

export default Home