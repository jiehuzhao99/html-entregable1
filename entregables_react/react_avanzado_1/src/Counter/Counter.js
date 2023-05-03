import { useEffect } from "react";
import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count === 3) {
            try {
                throw new Error("Counter is 3");
            } catch (error) {
                console.log(error);
            }
        }
    }, [count]);

    const handleClick = () => {
        setCount(count + 1);
    }

    return ( 
        <div>
            <p>Count: {count}</p>
            <button onClick={handleClick}>Increment</button>
        </div>
     );
}
 
export default Counter;