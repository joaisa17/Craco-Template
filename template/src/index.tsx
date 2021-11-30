import { Fragment } from 'react';
import { render } from 'react-dom';

import App from '@/App';
import DefaultHead from '@EssentialComponents/DefaultHead';

import '@scss/_main.scss';

render(
    <Fragment>
        <DefaultHead />
        <App />
    </Fragment>,
    document.getElementById('main')
);