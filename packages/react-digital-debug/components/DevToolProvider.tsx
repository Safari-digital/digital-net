import type { PropsWithChildren, ReactNode } from 'react';
import type { Position } from '../../dto';
import { useLocalStorage } from '../../react-digital';
import { DevToolContext } from './DevToolContext';
import DevWidget from './DevWidget/DevWidget';

interface DevToolProviderProps extends PropsWithChildren {
    appVersion?: string;
    renderContent: () => ReactNode;
}

export default function DevToolProvider({ children, appVersion, renderContent }: DevToolProviderProps) {
    const [isActive, setIsActive] = useLocalStorage<boolean>('DEV_TOOL_ACTIVE', false);
    const [position, setPosition] = useLocalStorage<Position>('DEV_TOOL_POS', { x: 0, y: 0 });
    const [offset, setOffset] = useLocalStorage<Position>('DEV_TOOL_OFFSET', { x: 0, y: 0 });

    return (
        <DevToolContext.Provider value={{ isActive, setIsActive }}>
            {isActive && (
                <DevWidget
                    position={position}
                    offset={offset}
                    onDrag={setOffset}
                    onMove={setPosition}
                    appVersion={appVersion}
                >
                    {renderContent()}
                </DevWidget>
            )}
            {children}
        </DevToolContext.Provider>
    );
}
