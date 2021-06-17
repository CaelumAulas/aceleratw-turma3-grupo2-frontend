import { Button } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

const CustomButton = ({
  className,
  divClassName,
  type,
  color,
  margin,
  label,
  ...rest
}) => {
  return (
    <div className={divClassName} style={{ display: 'flex' }}>
      <Button
        {...rest}
        variant="contained"
        className={className}
        type={type}
        color={color}
        margin={margin}
      >
        {label}
      </Button>
    </div>
  );
};

CustomButton.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  divClassName: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  type: PropTypes.string,
  color: PropTypes.string,
  margin: PropTypes.string,
  label: PropTypes.string,
};

CustomButton.defaultProps = {
  className: null,
  divClassName: null,
  type: '',
  color: 'primary',
  margin: 'dense',
  label: '',
};

export default CustomButton;
