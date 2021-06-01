import { TextField } from "@material-ui/core";
import React from "react";

import PropTypes from "prop-types";

const TextInput = ({ id, label, margin, fullWidth, ...rest }) => {
  return (
    <>
      <TextField
        {...rest}
        id={id}
        label={label}
        variant="outlined"
        margin={margin}
        fullWidth={fullWidth}
      />
    </>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  margin: PropTypes.string,
  fullWidth: PropTypes.bool,
};

TextInput.defaultProps = {
  margin: "normal",
  fullWidth: true,
};

export default TextInput;
