import { ReactNode } from 'react';

type SetNodeType = (nodeName: string, depth: number) => void;
type UnSetNodeType = (nodeName: string, depth: number) => void;

export interface Props {
    children: (params: {
        setNode: SetNodeType;
        unSetNode: UnSetNodeType;
        styles: any;
    }) => ReactNode;
}
