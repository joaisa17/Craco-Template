import { FC } from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

import CombineClasses from '@tsc/CombineClasses';

function linkIsExternal(link : string) {
    return [
        Boolean(link.match(/^(http(s?):\/\/)|mailto:[\S]+$/)),
        Boolean(link.match(/^mailto:[\S]+$/))
    ]
}

type Props = LinkProps & Common.LinkProps;
const Link : FC<Props> = ({
    to,
    className,
    children,
    target,
    rel,
    ...props
}) => {
    const [external, emailPrompt] = linkIsExternal(to);

    return (external && <a
        className={CombineClasses('external-link', CombineClasses(className, emailPrompt && 'e-mail'))}
        children={children}
        href={to}

        target={(emailPrompt && "_parent") || "_blank"}
        rel="noopener noreferrer"

        {...props}
    />) || <RouterLink
        className={CombineClasses('external-link', className)}
        children={children}
        to={to}

        {...props}
    />
}

export default Link;