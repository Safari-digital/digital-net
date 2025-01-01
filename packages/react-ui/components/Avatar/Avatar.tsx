import React, { type PropsWithChildren } from 'react';
import { Icon } from '../Icon';
import type { SafariNode } from '../types';
import { useClassName, useImage, useProps } from '../../../react-elements';
import './Avatar.styles.css';

export interface AvatarProps extends SafariNode {
    src?: string;
    color?: 'primary' | 'text' | 'disabled';
    size?: 'small' | 'medium' | 'large';
    onClick?: () => void;
    fullWidth?: boolean;
}

export default function Avatar({ src, color = 'text', size = 'small', fullWidth = false, ...props }: AvatarProps) {
    const classNames = useClassName({ color, size, fullWidth, ...props }, 'SafariUi-Avatar');
    const svgProps = React.useMemo(() => ({ color, size, fullWidth }), [color, size, fullWidth]);
    const { hasError } = useImage(src);

    return (
        <AvatarContainer className={classNames} color={color} size={size} fullWidth={fullWidth} {...props}>
            {src && !hasError
                ? (
                        <div className="SafariUi-Avatar-container">
                            <img src={src} alt="" />
                            <Icon.CircleIcon {...svgProps} />
                        </div>
                    )
                : (
                        <Icon.AccountIcon {...svgProps} />
                    )}
        </AvatarContainer>
    );
}

function AvatarContainer({ children, ...props }: AvatarProps & PropsWithChildren) {
    const { mapHtmlProps } = useProps(props);
    return mapHtmlProps(<div>{children}</div>);
}