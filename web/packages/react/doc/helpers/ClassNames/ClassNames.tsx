import React, {
    FunctionComponent,
    useCallback,
    useMemo,
    useState,
} from 'react';
import Table from 'react-styleguidist/lib/client/rsg-components/Table/TableRenderer';
import TabButton from 'react-styleguidist/lib/client/rsg-components/TabButton';
import Name from 'react-styleguidist/lib/client/rsg-components/Name';
import Type from 'react-styleguidist/lib/client/rsg-components/Type';

import {
    ClassNamesContainer,
    TriggerButtonContainer,
    NoWrap,
    Collapse,
} from './style';
import { Props, ClassNameElement } from './type';

export const ClassNames: FunctionComponent<Props> = ({ data }) => {
    const [collapsed, setCollapsed] = useState(true);

    const columns = useMemo(() => {
        return [
            {
                caption: 'Class name',
                render: (item: ClassNameElement) => (
                    <Name>
                        <NoWrap>{item.name}</NoWrap>
                    </Name>
                ),
            },
            {
                caption: 'Description',
                render: (item: ClassNameElement) => (
                    <Type>{item.description || ''}</Type>
                ),
            },
        ];
    }, []);

    const getRowKey = useCallback((item: any) => item.name, []);

    return (
        <ClassNamesContainer>
            <TriggerButtonContainer onClick={() => setCollapsed(!collapsed)}>
                <TabButton active={!collapsed}>Classnames</TabButton>
            </TriggerButtonContainer>
            <Collapse collapsed={collapsed}>
                <Table columns={columns} rows={data} getRowKey={getRowKey} />
            </Collapse>
        </ClassNamesContainer>
    );
};
