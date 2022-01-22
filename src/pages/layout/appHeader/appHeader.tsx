import { Box } from '@mui/material';
import { AvatarH, PrintH } from 'src/atoms';
import React from 'react';
import { layoutInterface } from 'src/interfaces';
import { commonFunction } from 'src/libs';

function AppHeader(props: layoutInterface.appHeaderInterface) {
  const { currentLocation, userInfo, onAvatar } = props;
  const { userName, avatar } = userInfo;
  return (
    <Box
      sx={{
        display: 'flex',
        borderBottom: '1px solid #dfdfe5',
        height: '56px',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <PrintH text={commonFunction.upperFirstLetter(currentLocation)} variant="h4" />
      <Box sx={{ display: 'flex ', alignItems: 'center', px: 1 }}>
        <PrintH text={userName} variant="h5" sx={{ px: 1 }} />
        <AvatarH content={avatar} onClick={onAvatar} />
      </Box>
    </Box>
  );
}

export default AppHeader;
