// components
import { Button, Space } from 'antd'

// hooks
import { useState } from 'react';
import { useRef } from 'react';

const Timer = () => {
    const [second, setSecond] = useState(0);
    const increment = useRef(null);

    const handleClickStartTimer = () => {
        increment.current = setInterval(() => {
            setSecond(second => second + 1);
        }, 1000);
    }

    const handleClickStopTimer = () => {
        clearInterval(increment.current);
        setSecond(0);
    }

    return ( 
        <div className="container">
            <Space className="enunciado">Botón que al pinchar activará un cronómetro (de segundo en segundo) e irá mostrandose en pantalla los segundos.</Space>
            <h3>{second}</h3>
            <Space wrap>
                <Button type="primary" onClick={handleClickStartTimer}>Start timer</Button>
                <Button onClick={handleClickStopTimer}>Stop timer</Button>
            </Space>
        </div>
     );
}
 
export default Timer;