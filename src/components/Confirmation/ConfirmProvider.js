/* eslint-disable react/prop-types */
import React, { useState, useCallback } from 'react';
import ConfirmContext from 'contexts/ConfirmContext';
import ConfirmationDialog from './ConfirmDialog';

const DEFAULT_OPTIONS = {
  title: 'Você tem certeza?',
  description: '',
  confirmationText: 'Ok',
  cancellationText: 'Voltar',
  dialogProps: {},
  confirmationButtonProps: {},
  cancellationButtonProps: {},
};

const buildOptions = (defaultOptions, options) => {
  const dialogProps = {
    ...(defaultOptions.dialogProps || DEFAULT_OPTIONS.dialogProps),
    ...(options.dialogProps || {}),
  };
  const confirmationButtonProps = {
    ...(defaultOptions.confirmationButtonProps ||
      DEFAULT_OPTIONS.confirmationButtonProps),
    ...(options.confirmationButtonProps || {}),
  };
  const cancellationButtonProps = {
    ...(defaultOptions.cancellationButtonProps ||
      DEFAULT_OPTIONS.cancellationButtonProps),
    ...(options.cancellationButtonProps || {}),
  };

  return {
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
    ...options,
    dialogProps,
    confirmationButtonProps,
    cancellationButtonProps,
  };
};

const ConfirmProvider = ({ children, defaultOptions = {} }) => {
  const [options, setOptions] = useState({
    ...DEFAULT_OPTIONS,
    ...defaultOptions,
  });
  const [resolveReject, setResolveReject] = useState([]);
  const [resolve, reject] = resolveReject;

  const confirm = useCallback(
    (option = {}) =>
      new Promise((resol, rej) => {
        setOptions(buildOptions(defaultOptions, option));
        setResolveReject([resol, rej]);
      }),
    [defaultOptions]
  );

  const handleClose = useCallback(() => {
    setResolveReject([]);
  }, []);

  const handleCancel = useCallback(() => {
    reject();
    handleClose();
  }, [reject, handleClose]);

  const handleConfirm = useCallback(() => {
    resolve();
    handleClose();
  }, [resolve, handleClose]);

  return (
    <>
      <ConfirmContext.Provider value={confirm}>
        {children}
      </ConfirmContext.Provider>

      <ConfirmationDialog
        open={resolveReject.length === 2}
        options={options}
        onClose={handleClose}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </>
  );
};

export default ConfirmProvider;
