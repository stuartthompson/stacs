import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageRoutes from './PageRoutes';

/**
 * Returns a component used to render the overall website structure.
 */
const SiteStructure = () => {
    return (
        <BrowserRouter>
            <PageRoutes />
        </BrowserRouter>
    );
}

export default SiteStructure;