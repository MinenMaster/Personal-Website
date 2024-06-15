import React from 'react';
import { Navigate } from 'react-router-dom';
import useSession from './lib/hooks/session';
import Cookies from 'js-cookie';

function withAuth(WrappedComponent) {
    return function(props) {
        const { user } = useSession();
        const sessionCookie = Cookies.get('session');

        if (!sessionCookie) {
            return <Navigate to="/login" />;
        }

        return <WrappedComponent {...props} />;
    };
}

export default withAuth;