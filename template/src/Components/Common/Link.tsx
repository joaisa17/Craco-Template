import { FC } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    to : string;
    className? : string;
    content? : string;
    dark? : boolean;
}

function linkIsExternal(link : string) {
    return [
        Boolean(link.match(/^(http(s?):\/\/)|mailto:[\S]+$/)),
        Boolean(link.match(/^mailto:[\S]+$/))
    ]
}

const Link : FC<Props> = props => {
    const [external, emailPrompt] = linkIsExternal(props.to);

    const defaultClass = `link ${props.dark ? 'dark' : 'light'}`;

    return (external && <a
        className={CombineClasses(`${defaultClass} external-link`, CombineClasses(props.className, emailPrompt && 'e-mail'))}
        children={props.children || props.content}
        href={props.to}

        target={(emailPrompt && "_parent") || "_blank"}
        rel="noopener noreferrer"
    />) || <RouterLink
        className={CombineClasses(`${defaultClass} internal-link`, props.className)}
        children={props.children || props.content}
        to={props.to}
    />
}

export default Link;