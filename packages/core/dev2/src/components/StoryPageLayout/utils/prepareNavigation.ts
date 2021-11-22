import {
    NavigationStoryLinksType,
    NavigationStructureType,
    StoryPageLayoutDataType,
} from '../type';
import { Unpack } from '../../../type';

export const prepareNavigation = (
    data: StoryPageLayoutDataType,
    componentName: string,
    storyLinks: NavigationStoryLinksType,
) => {
    const structure = data.allSitePage.edges
        .filter(edge => edge.node.path.startsWith('/stories'))
        .reduce((result: NavigationStructureType, edge) => {
            const match = edge.node.path.match(/\/stories\/([^\/]+)\//);
            if (match) {
                const foundComponentName = match[1];

                const componentItem: Unpack<NavigationStructureType> = {
                    name:
                        foundComponentName.slice(0, 1).toUpperCase() +
                        foundComponentName.slice(1),
                    url: `/stories/${foundComponentName}`,
                    stories: [],
                };
                if (
                    foundComponentName.toLowerCase() ===
                    componentName.toLowerCase()
                ) {
                    componentItem.stories = storyLinks;
                    if (storyLinks[0]) {
                        componentItem.url = `${componentItem.url}${storyLinks[0].url}`;
                    }
                }

                result.push(componentItem);
            }

            return result;
        }, []);

    structure.sort((a, b) => {
        const { name: aName } = a;
        const { name: bName } = b;

        return aName.localeCompare(bName);
    });

    return structure;
};
