// components
import { Button } from 'antd'

// hooks
import { useState } from 'react';

const Timer = () => {
    const [second, setSecond] = useState(0);

    return ( 
        <Button type="primary">Start timer</Button>
     );
}
 
export default Timer;