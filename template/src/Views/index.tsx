import { Route } from 'react-router-dom';

// Import all views
import Home from './Home';

const Views = [
    <Route path="/" element={<Home />} />
];

export default Views;
