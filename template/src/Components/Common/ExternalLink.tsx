import { PropsWithChildren } from 'react';
import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    href : string;
    className? : string;
    content? : string;
}

const ExternalLink = ({href, className, children, content, ...props} : PropsWithChildren<Props>) => (
    <a
        className={CombineClasses('external-link', className)}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
    >
        {/*
            The content can be defined in two ways. Either by using children,
            or by using content="" in the props, to shorten the length.
        */}
        {content || children}
    </a>
)

export default ExternalLink;