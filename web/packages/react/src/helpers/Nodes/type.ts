export type ClassNameElement = {
    element: string;
    modifier?: string;
    description?: string;
};

export interface Props {
    blockName: string;
    nodes: ClassNameElement[];
}
