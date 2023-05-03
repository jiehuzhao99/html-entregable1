import { useState } from "react";

const Inputs = () => {
    const [value, setValue] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClick = () => {
        setShowPassword(true);
    }

    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        setShowPassword(false);
    }

    return ( 
        <div>

            {/* Pregunta 7 */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
                <p>{value}</p>
            </div>

            {/* Pregunta 8 */}
            <div style={{display: 'flex', justifyContent: 'center'}}>
                <input type="password" value={password} onChange={handleChangePassword} />
                <button onClick={handleClick}>Submit</button>
                <p style={{color: '#A5A5A5'}}>{showPassword ? password : ""}</p>
            </div>

        </div>
     );
}
 
export default Inputs;