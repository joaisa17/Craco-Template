import { FC, Fragment, /*useState,*/ useEffect } from 'react';
import { Helmet } from 'react-helmet';

import Link from '@CommonComponents/Link';

import CombineClasses from '@tsc/CombineClasses';
import Capitalize from '@tsc/Capitalize';

import { Breadcrumbs } from '@muim';

const Page : FC<Essential.Page.Props> = (props) => {

    useEffect(() => {
        if (!props.disableScrollOnLoad) window.scrollTo(0, 0);
    });

    // If you have a menu
    // const [menuVisible, setMenuVisible] = useState<boolean>(false);

    return <Fragment>
        <Helmet>
            <title>{Capitalize(props.title)}</title>
        </Helmet>

        { /* If you have a header: !props.hideHeader && <Header setMenuVisible={setMenuVisible} menuVisible={menuVisible} /> */ }
        {/* If you have a menu: !props.disableMenu && <Menu setVisible={setMenuVisible} visible={menuVisible} /> */}

        {props.crumbs && <Breadcrumbs className="breadcrumbs">
            {props.crumbs.map((crumb, i) => <Link key={i} to={crumb.path}>{crumb.name}</Link>)}
        </Breadcrumbs>}

        <div className={CombineClasses('content', props.className)} children={props.children} />

        {/* If you have a footer: !props.hideFooter && <Footer /> */}
    </Fragment>
}

export default Page;