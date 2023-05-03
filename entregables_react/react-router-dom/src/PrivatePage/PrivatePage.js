import { Navigate } from 'react-router-dom';

const PrivatePage = () => {
    const isAuthenticated = !!localStorage.jwt;

    if (!isAuthenticated) {
        alert("this is a private page, you need to login first");
        return <Navigate to="/login" />;
    }

    return ( 
        <div>
            <h1>Private Page</h1>

        </div>
     );
}
 
export default PrivatePage;