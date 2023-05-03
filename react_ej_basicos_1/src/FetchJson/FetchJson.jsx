// hooks
import { useState } from 'react';

// components
import { Button } from 'antd';

const FetchJson = () => {
    const [data, setData] = useState(null);

    async function fetchJSON() {
        console.log('fetching...');
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await res.json();
        
        setData(data);
        console.log(data);
    };

    return ( 
        <div>
            <Button onClick={fetchJSON}>Fetch</Button>
            <p>{data ? JSON.stringify(data, null, 2) : "No data yet"}</p>
        </div>
     );
}
 
export default FetchJson;