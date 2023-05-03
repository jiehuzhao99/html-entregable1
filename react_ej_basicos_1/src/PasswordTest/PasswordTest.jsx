// hooks
import { useState } from 'react';

// components
import { Input, Space } from 'antd';

const PasswordTest = () => {
    const [score, setScore] = useState(0);
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState(['']);

    const handleChange = (e) => {
        const password = e.target.value;
        setPassword(password);

        password === ''? setScore(0): calculateScore(password);
    };

    const calculateScore = (password) => {
        let newScore = 0;
        if (password.length >= 8) {
            console.log('longer than 8');
            newScore +=1;
        }
        if (/\d/.test(password)) {
            console.log('has numbers');
            newScore++;
        }
        if (/[A-Z]/.test(password)) {
            console.log('has caps');
            newScore++;
        }
        if (/[$%&/()+\-:]/.test(password)) {
            newScore++;
            console.log('has symbols');
        }
        setScore(newScore);
    };

    return ( 
        <Space> 
            <Input placeholder="password" onChange={handleChange} />
            <p>{score}</p>
            {score === 1 && <p>Password strength: weak</p>}
            {score === 2  && <p>Password strength: normal</p>}
            {score === 3 && <p>Password strength: normal</p>}
            {score === 4 && <p>Password strength: strong</p>}
        </Space>
     );
}
 
export default PasswordTest;