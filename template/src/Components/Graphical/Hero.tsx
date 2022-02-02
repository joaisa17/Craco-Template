import { FC } from 'react';

import CombineClasses from '@CommonTS/CombineClasses';

interface Props {
    src: string;
    className?: string;
    top?: boolean;
}

const Hero: FC<Props> = props => <div
    className={CombineClasses('hero', props.top && 'top')}
>
    <div className="background" style={{
        backgroundImage: `url('${props.src}')`
    }}/>

    {props.children}
</div>

export default Hero;