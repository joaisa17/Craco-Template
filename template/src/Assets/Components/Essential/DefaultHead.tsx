import { Helmet } from 'react-helmet';

export default function DefaultHead() {
    return <Helmet>
        <title>React App</title>

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Helmet>
}