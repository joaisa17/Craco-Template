import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom';

import Routes from '@Views/index';

export default function App() {
    return <BrowserRouter>
        <ReactRoutes>
            {Routes.map((route, i) => {
                const Element = route.element;

                return <Route
                    key={i}
                    path={route.path}
                    element={<Element />}
                />
            })}
        </ReactRoutes>
    </BrowserRouter>
}