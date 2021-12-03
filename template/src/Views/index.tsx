import Route from '@ts/Classes/Route';

// Import all views
import Home from './Home';

/*
    Add your routes below.
    For non exact routes, use:

    new Route('/examplepath/*', ExampleComponent);
*/

const Routes = [
    new Route('/', Home)
];

export default Routes;
