declare namespace Essential {
    namespace Page {
        interface BreadCrumb {
            name: string;
            path: string;
        }

        interface Props {
            title: string;
    
            className?: string;
    
            crumbs?: BreadCrumb[];
    
            hideHeader?: boolean;
            hideFooter?: boolean;
    
            disableMenu?: boolean;
    
            disableScrollOnLoad?: boolean;
        }
    }
}