// hook to read the email from the store
import { useSelector } from "react-redux"

// hook to update the email in the store
import { useDispatch } from "react-redux"

// action to update the email in the store
import { changeEmail } from "../redux/userSlice";

export function Email() {
    const email = useSelector((state) => state.user.email);
    const dispatch = useDispatch();

    function handleEmailChange(e) {
        dispatch(changeEmail(e.target.value));
    }

    return(
        <input type="text" value={email} onChange={handleEmailChange} />
    )
}