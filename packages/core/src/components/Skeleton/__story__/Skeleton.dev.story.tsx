/* eslint-disable no-console,import/no-unresolved */

import React, { MouseEvent } from 'react';

import { Skeleton } from '../index';
import { Typography } from '../../Typography';
import { Pack, PackItem } from '../../Pack';
import { Card } from '../../Card';
import { Accordion, AccordionContent, AccordionHeader } from '../../Accordion';

export default {
    title: 'Components/Skeleton',
    component: Skeleton,
};

export const Shapes = () => {
    return (
        <>
            <Skeleton animated={false} width={78} height={6} rounded />
            <Skeleton animated={false} width={78} height={12} />
            <Skeleton animated={false} width={30} height={30} />
            <Skeleton animated={false} width={30} height={30} rounded />

            <Typography sectionTitle>Shapes with animations</Typography>

            <Skeleton width={78} height={6} rounded />
            <Skeleton width={78} height={12} />
            <Skeleton width={30} height={30} />
            <Skeleton width={30} height={30} rounded />
        </>
    );
};

export const SampleLayouts = () => {
    return (
        <div>
            <Typography sectionTitle> Info card</Typography>
            <Pack>
                <PackItem>
                    <Skeleton width={20} height={20} rounded />
                </PackItem>
                <PackItem>
                    <Skeleton width={38} height={6} rounded />
                    <Skeleton width={78} height={12} />
                </PackItem>
            </Pack>

            <Typography sectionTitle>Small data snippet</Typography>
            <Skeleton width={58} height={6} rounded />
            <Skeleton width={78} height={12} />

            <Typography sectionTitle>
                Data with sub-section and detailed description
            </Typography>
            <Skeleton width={58} height={6} rounded />
            <Skeleton width={48} height={4} rounded />
            <Skeleton width={78} height={12} />

            <Typography sectionTitle>Animation with image elements</Typography>
            <Skeleton width={30} height={30} imagePlaceholder marginY={2} />
            <Skeleton
                width={30}
                height={30}
                rounded
                imagePlaceholder
                marginY={2}
            />
        </div>
    );
};

export const ImagePlaceholders = () => {
    return (
        <>
            <Skeleton
                width={30}
                height={30}
                imagePlaceholder
                marginY={2}
                animated={false}
            />
            <Skeleton
                width={30}
                height={30}
                rounded
                imagePlaceholder
                marginY={2}
                animated={false}
            />

            <Skeleton width={8} height={8} imagePlaceholder marginY={2} />
            <Skeleton
                width={8}
                height={8}
                rounded
                imagePlaceholder
                marginY={2}
            />
        </>
    );
};

export const CustomSizeAndMargins = () => {
    return (
        <>
            <Skeleton width="20px" height="40px" animated={false} />
            <Skeleton width="100px" height="80px" animated={false} />
            <Skeleton width="20px" height="20px" animated={false} />
            <Skeleton height="30px" width="30px" rounded animated={false} />
        </>
    );
};

export const AsPartOfOtherComponents = () => {
    const handleOnToggle = (event: MouseEvent, isExpanded: boolean) =>
        // eslint-disable-next-line no-console
        console.log('Toggle: ', isExpanded);

    return (
        <>
            <Card padding={4} margin={5}>
                <Pack>
                    <PackItem>
                        <Skeleton
                            animated={false}
                            height="80px"
                            width="80px"
                            rounded
                        />
                    </PackItem>
                    <PackItem flexGrow={1}>
                        <Skeleton width={60} height={6} animated={false} />
                        <Skeleton width={120} height={12} animated={false} />
                    </PackItem>
                </Pack>
            </Card>

            <Card padding={4} margin={5}>
                <Accordion defaultExpanded onToggle={handleOnToggle}>
                    <AccordionHeader title="Test" />
                    <AccordionContent>
                        <Skeleton width={78} height={12} wide />
                    </AccordionContent>
                </Accordion>
                <Accordion onToggle={handleOnToggle}>
                    <AccordionHeader title="Another test" />
                    <AccordionContent>Content</AccordionContent>
                </Accordion>
            </Card>
        </>
    );
};
