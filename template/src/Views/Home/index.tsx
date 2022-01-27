import Page from '@Components/Essential/Page';

import Logo from '@Assets/svg/Logo.svg';

import Link from '@CommonComponents/Link';

import { Button } from '@muim';

const Home = () => <Page title="Craco App" pageClass="home">
    <header className="app-header">
        <p>
            React template with Typescript
            and Material UI,
            by joaisa17
        </p>

        <img src={Logo} className="app-logo" alt="Logo" />

        <p>
            Edit <code>src/Views/Home/index.tsx</code> and save to reload.
        </p>

        <p>
            <Button variant="contained">Material UI Button</Button>
        </p>

        <Link to="https://reactjs.org">Learn React</Link>

        <Link to="https://github.com/joaisa17">
            Visit joaisa17 on GitHub
        </Link>
    </header>
</Page>

export default Home;
