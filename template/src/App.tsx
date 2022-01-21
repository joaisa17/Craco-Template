import { Fragment } from 'react';
import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import Views from '@Views/index';

export default function App() {
    return <BrowserRouter>
        <ReactRoutes>

            {/* Insert views */}
            {Views.map((view, i) => <Fragment key={i}>{view}</Fragment>)}

            {/* Redirect to the default route if no page was rendered */}
            <Route path="*" element={<Navigate replace to="/" />} />
            
        </ReactRoutes>
    </BrowserRouter>
}