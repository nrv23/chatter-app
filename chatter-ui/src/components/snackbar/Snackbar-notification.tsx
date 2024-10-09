
import Button from '@mui/material/Button';
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {  SyntheticEvent } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Stack } from '@mui/material';
import { useReactiveVar } from '@apollo/client';
import { snackVar } from '../../constants/snack';

const  SnackbarNotification = () =>  {

  const snack = useReactiveVar(snackVar);

  const handleClose = (
    event: SyntheticEvent | Event,
    reason?: SnackbarCloseReason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    snackVar(undefined);
  };

  const action = (
    <Fragment>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </Fragment>
  );

  return snack ? (
    <>
      <Stack spacing={2} sx={{width: '100%'}}>
      <Snackbar
        open={!!snack}
        autoHideDuration={6000}
        onClose={handleClose}
        message={snack.message}
        action={action}
      />
      </Stack>
    </>
  ): null;
}


export { SnackbarNotification };