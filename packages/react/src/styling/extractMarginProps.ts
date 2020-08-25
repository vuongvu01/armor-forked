import { RadioRootPropsType } from '../components/Radio/type';

type PickMarginPropsType = RadioRootPropsType & any;

const extractMarginProps = ({
    margin,
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    marginX,
    marginY,
    ...restProps
}: PickMarginPropsType) => {
    const marginProps = {
        margin,
        marginTop,
        marginBottom,
        marginLeft,
        marginRight,
        marginX,
        marginY,
    };

    return { marginProps, ...restProps };
};

export default extractMarginProps;
