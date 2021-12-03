import { FC } from 'react';

export default class Route {
    path: string;
    element: FC;
    
    constructor(path : string, element : FC) {
        this.path = path;
        this.element = element;
    }
}