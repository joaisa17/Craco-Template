import { FC } from 'react';

import Home from './Home';

const Routes : Route[] = [];

class Route {
    path: string;
    element: FC;
    
    constructor(path : string, element : FC) {
        this.path = path;
        this.element = element;

        Routes.push(this);
    }
}

new Route('/', Home);

export default Routes;
