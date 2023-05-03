// components
import { Input, Space } from 'antd';

// hooks
import { useState } from 'react';

const InputWithError = () => {
    const [isInvalid, setIsInvalid] = useState(false);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        const { value } = e.target;
        setValue(value);
        setIsInvalid(!(value === 'A tope con React'));
    };

    return ( 
        <div style={{paddingBottom: '50px'}}>
            <Input style={{width: '20%'}} placeholder="input with error" value={value} onChange={handleChange} />
            {isInvalid && (
                <div style={{color: 'red', padding: '10px'}}>Error</div>
            )}
        </div>
     );
}
 
export default InputWithError;