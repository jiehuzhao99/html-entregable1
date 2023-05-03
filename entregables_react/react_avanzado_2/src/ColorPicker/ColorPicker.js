import { useState } from "react";
import Select from "react-select";

const colors = [
    { value: "red", label: "Rojo" },
    { value: "blue", label: "Azul" },
    { value: "green", label: "Verde" },
    { value: "yellow", label: "Amarillo" },
    { value: "orange", label: "Naranja" },
    { value: "purple", label: "Morado" },
    { value: "pink", label: "Rosa" },
    { value: "brown", label: "Marrón" },
];

const ColorPicker = () => {
    const [color, setColor] = useState(colors[0]);

    const handleChange = (value) => {
        setColor(value);
    };

    return (  
        <div>
            <Select options={colors} value={color} onChange={handleChange} />
            <p style={{color: `${color.value}`}}>Texto que cambia de color</p>
        </div>
    );
}
 
export default ColorPicker;