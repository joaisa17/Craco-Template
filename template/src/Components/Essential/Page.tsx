import { FC, Fragment, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Link from '@CommonComponents/Link';

import CombineClasses from '@CommonTS/CombineClasses';
import Capitalize from '@CommonTS/Capitalize';

import { Breadcrumbs } from '@muim';

interface Crumb {
    path: string;
    name: string;
}

export type Crumbs = Crumb[];

interface Props {
    title: string;

    className?: string;
    pageClass?: string;

    crumbs?: Crumbs;
    lightCrumbs?: boolean;

    hideHeader?: boolean;
    hideFooter?: boolean;

    disableMenu?: boolean;

    disableScrollOnLoad?: boolean;
}

const Page : FC<Props> = (props) => {

    useEffect(() => {
        if (!props.disableScrollOnLoad) window.scrollTo(0, 0);
    });

    const [menuVisible, setMenuVisible] = useState<boolean>(false);

    return <Fragment>
        <Helmet>
            <title>{Capitalize(props.title)}</title>
        </Helmet>

        { /* If you have a header: !props.hideHeader && <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} /> */ }
        {/* If you have a menu: !props.disableMenu && <Menu setVisible={setMenuVisible} visible={menuVisible} /> */}

        {props.crumbs && <Breadcrumbs className="breadcrumbs">
            {props.crumbs.map((crumb, i) => <Link {...props.lightCrumbs ? {dark: false} : {dark: true}} key={i} to={crumb.path}>{crumb.name}</Link>)}
        </Breadcrumbs>}

        <div className={CombineClasses('page content', CombineClasses(props.className, props.pageClass && 'page-' + props.pageClass))} children={props.children} />

        {/* If you have a footer: !props.hideFooter && <Footer /> */}
    </Fragment>
}

export default Page;