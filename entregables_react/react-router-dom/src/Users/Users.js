import { Link } from "react-router-dom";

const Users = ({ users }) => {
    return ( 
        <div>
            <h1>Users</h1>
            <ul>
                {users.map(user => (
                    <Link to={`/users/${user.id}`}>
                        <li key={user.id}>{user.name}</li>
                    </Link>
                ))}
            </ul>
        </div>
     );
}
 
export default Users;