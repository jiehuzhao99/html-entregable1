// hook to read the user from the store
import { useSelector } from 'react-redux';

export function Header() {
    // get the user from the store
    const user = useSelector((state) => state.user);

    return (
        <header>
            <ul>
                <li>Name: {user.name}</li>
                <li>Username: {user.username}</li>
                <li>Email: {user.email}</li>
            </ul>
        </header>
    )
}