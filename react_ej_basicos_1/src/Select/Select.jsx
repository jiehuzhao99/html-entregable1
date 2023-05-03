// components
import { Select } from 'antd'

const SelectItems = ({value, items, onChange}) => {

    const handleChange = (value) => {
        console.log("handleChange");

        onChange(value);
    }
 
    return ( 
        <div style={{paddingBottom: '50px'}}>
            <Select
             style={{ width: 120 }}
             value={value} 
             options={items} 
             onChange={handleChange} />
        </div>
     );
}
 
export default SelectItems;