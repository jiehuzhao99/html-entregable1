// local components
import ShowMessage from "../ShowMessage/ShowMessage";

const Loading = ({ show }) => {
    return ( 
        <div>
            { show ? <ShowMessage /> : <p>Loading...</p> }
        </div>
     );
}
 
export default Loading;