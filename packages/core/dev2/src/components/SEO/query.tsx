import React, { FunctionComponent } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { QueryProps } from '../../type';

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                description
                author
                keywords
            }
        }
    }
`;

export const Query: FunctionComponent<React.PropsWithChildren<QueryProps>> = ({ children }) => {
    return <StaticQuery query={detailsQuery} render={data => children(data)} />;
};
