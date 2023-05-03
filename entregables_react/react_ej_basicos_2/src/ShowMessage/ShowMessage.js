import { useState } from "react";

const ShowMessage = () => {
    const [showMessage, setShowMessage] = useState(false);

    return ( 
        <div>
            <button onClick={() => setShowMessage(!showMessage)}>Show Message</button>
            {showMessage && <p>Ahora puedes leer esto</p>}
        </div>
     );
}
 
export default ShowMessage;