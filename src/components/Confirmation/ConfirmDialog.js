/* eslint-disable react/require-default-props */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';
import PropTypes from 'prop-types';

const ConfirmDialog = ({ open, options, onCancel, onConfirm, onClose }) => {
  const {
    title,
    description,
    confirmationText,
    cancellationText,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
  } = options;

  return (
    <Dialog
      fullWidth
      {...dialogProps}
      open={open}
      onClose={onClose}
      data-testid="dialog-container"
    >
      {title && <DialogTitle>{title}</DialogTitle>}
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button
          {...cancellationButtonProps}
          color="secondary"
          onClick={onCancel}
          data-testid="cancel-button"
        >
          {cancellationText}
        </Button>
        <Button
          color="primary"
          {...confirmationButtonProps}
          onClick={onConfirm}
          data-testid="confirm-button"
        >
          {confirmationText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

ConfirmDialog.propTypes = {
  open: PropTypes.bool,
  options: PropTypes.object,
  onCancel: PropTypes.func,
  onConfirm: PropTypes.func,
  onClose: PropTypes.func,
};

export default ConfirmDialog;
