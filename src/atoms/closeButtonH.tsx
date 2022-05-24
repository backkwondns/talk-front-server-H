import { IconButtonH } from 'src/atoms/index';
import { Close } from '@mui/icons-material';
import React from 'react';
import { atomsInterface } from 'src/interfaces';

function CloseButtonH(props: atomsInterface.closeButtonInterface): JSX.Element {
  const { onClose, icon = <Close /> } = props;
  return (
    <IconButtonH
      sx={{ position: 'absolute', top: 0, left: 0, m: 0.5, zIndex: 1000000 }}
      icon={icon}
      onClick={onClose}
    />
  );
}

export default CloseButtonH;
