import Loading from '../Common/Loading';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext/AuthProvider';
import { Navigate } from 'react-router-dom';


const PrivateRout = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (user && user.email) {
        return children;
    }

    return (
        <Navigate replace={true} to={"/login"}></Navigate>
    );
};

export default PrivateRout;