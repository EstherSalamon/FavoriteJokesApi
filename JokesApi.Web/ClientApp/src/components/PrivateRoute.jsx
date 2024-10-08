﻿import { Navigate } from 'react-router-dom';
import { useAuthentication } from '../AuthenticationContext';

const PrivateRoute = (props) => {

    const { user } = useAuthentication();

    return user ? props.children : <Navigate to='/login' replace />

};

export default PrivateRoute;