import { BrowserRouter, Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import Routes from '@Views/index';

export default function App() {
    return <BrowserRouter>
        <ReactRoutes>

            {/* Create a Route component for each Route in Routes */}
            {Routes.map((route, i) => {
                const Element = route.element;

                return <Route
                    key={i}
                    path={route.path}
                    element={<Element />}
                />
            })}

            {/* Redirect to default if no page was rendered */}
            <Route path="*" element={<Navigate to="/" />} />
            
        </ReactRoutes>
    </BrowserRouter>
}