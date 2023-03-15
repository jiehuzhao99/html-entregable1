// components
import { Button } from 'antd'

// hooks
import { useState } from 'react';

const Timer = () => {
    // const [second, setSecond] = useState(0);

    return ( 
        <div>
            <p>this is the start of the timer</p>
            <Button type="primary">Start timer</Button>
        </div>
     );
}
 
export default Timer;