// components
import { Space } from "antd";

// hooks
import { useState } from "react";
import { useEffect } from "react";

const otherUsers = ['sergio', 'victoria', 'ivan', 'liviu'];
const namesAndAges = [
    { name:'Sergio', age: 28 },
    { name: 'Victoria', age: 27 },
    { name: 'Iván', age: 30 },
    { name: 'Liviu', age: 26 }
];

const Users = () => {
    const [users, setUsers] = useState(["Carlos", "Pablo"]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        return() => {
            console.log("Componente destruido");
            setIsMounted(false);
        };
    }, []);

    useEffect(() => {
        if(isMounted) {
            addName("Pepe");
        }
    }, [isMounted]);

    const addName = (newUser) => {
        setUsers(prevUsers => [...prevUsers, newUser]);
    }

    return ( 
        <div className="container">
            {/* Pregunta 4 */}
            <Space wrap>
                { users.map((user) => (
                    <p key={user}>{user}</p>
                ))}
            </Space>

            {/* Pregunta 5 */}
            <Space wrap>
                {otherUsers.map((user) => (
                    <ul>
                        <li>{user}</li>
                    </ul>
                ))}
            </Space>

            {/* Pregunta 6 */}
            <Space wrap>
                {namesAndAges.map((user) => (
                    <p>{user.name} {user.age}</p>
                ))}
            </Space>
        </div>
     );
}
 
export default Users;