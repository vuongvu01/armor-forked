import React, { useState } from 'react';
import { withWrapper } from '../../../helpers/Wrapper';
import { Button } from '../../Button';
import { MultilineTruncateParagraph } from '../MultilineTruncateParagraph';

export default {
    title: 'Core/MultilineTruncateParagraph',
    component: MultilineTruncateParagraph,
    decorators: [withWrapper],
    parameters: {},
};

export const Basic = () => {
    const [expand, setExpand] = useState(true);
    return (
        <>
            <Button onClick={() => setExpand(!expand)}>
                {expand ? 'Collapse' : 'Expand'}
            </Button>
            <MultilineTruncateParagraph
                truncated={!expand}
                typographyProps={{ paragraph: true, large: true }}
                numOfLines={4}
            >
                HSed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?
            </MultilineTruncateParagraph>
        </>
    );
};
