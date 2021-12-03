import Logo from '@Assets/svg/Logo.svg';

/*
    The default export for external links
    is ExternalLink, but to shorten the
    length, we import it as EL
*/
import {default as EL} from '@CommonComponents/ExternalLink';

const Home = () => <div className="app">
    <header className="app-header">
        <p>
            React template with Typescript
            by joaisa17
        </p>

        <img src={Logo} className="app-logo" alt="Logo" />

        <p>
            Edit <code>src/Views/Home/index.tsx</code> and save to reload
        </p>

        <EL content="Learn React" href="https://reactjs.org" />

        <EL href="https://github.com/joaisa17">
            Visit joaisa17 on GitHub
        </EL>
    </header>
</div>

export default Home;