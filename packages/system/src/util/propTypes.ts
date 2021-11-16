import PropTypes from 'prop-types';

export const getScalarPropType = () =>
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]);

export const getArrayOfScalarPropType = () =>
    PropTypes.arrayOf(getScalarPropType().isRequired);
