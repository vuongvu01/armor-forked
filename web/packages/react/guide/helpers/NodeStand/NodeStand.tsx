import React, { FunctionComponent, useState, useMemo } from 'react';
import { css } from 'styled-components';

import { NodeStandContainer, Path } from './style';
import { Props } from './type';

export const NodeStand: FunctionComponent<Props> = ({ children }) => {
    const [path, setPath] = useState({});

    const setNode = (nodeName: string, depth = 0) => {
        setPath({ ...path, [depth]: nodeName });
    };
    const unSetNode = (nodeName: string, depth = 0) => {
        setPath({ ...path, [depth]: undefined });
    };

    const pathDisplay = useMemo(() => Object.values(path).join(' > '), [path]);
    const styles = useMemo(() => {
        return Object.values(path).reduce((result: any, item: unknown): any => {
            // eslint-disable-next-line no-param-reassign
            result[item as string] = () =>
                css`
                    border: 1px solid #ba0000;
                `;
            return result;
        }, {});
    }, [path]);

    return (
        <NodeStandContainer>
            <Path active={!!pathDisplay}>{pathDisplay || 'nodes'}</Path>
            {children({ setNode, unSetNode, styles })}
        </NodeStandContainer>
    );
};
