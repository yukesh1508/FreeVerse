import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';

const Layout = ({ children }) => {
    const location = useLocation();

    // Define routes where the footer should not appear
    const noFooterRoutes = ['/login', '/signup',"/search"];

    // Check if the current path matches any of the noFooterRoutes
    const shouldHideFooter = noFooterRoutes.includes(location.pathname);

    return (
        <>
            {/* Main content */}
            {children}

            {/* Conditionally render the footer */}
            {!shouldHideFooter && <Footer />}
        </>
    );
};

export default Layout;
