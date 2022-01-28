import React from 'react';
import { layoutInterface } from 'src/interfaces';
import { Box } from '@mui/material';
import { ButtonH } from 'src/atoms';
import { ChatBubble, MoreHoriz, Person } from '@mui/icons-material';

function AppFooter(props: layoutInterface.appFooterInterface): JSX.Element {
  const { currentLocation, onClick } = props;
  return (
    <Box
      sx={{
        height: '56px',
        borderTop: '1px solid #dfdfe5',
        display: 'flex',
        position: 'sticky',
        bottom: 0,
        flex: 1,
        width: 1,
        justifyContent: 'space-around',
        zIndex: 1000,
        backgroundColor: 'background.paper',
      }}
    >
      <ButtonH
        id="friend"
        fullWidth
        text="Friend"
        content={<Person />}
        isSelected={currentLocation === 'friend'}
        onClick={onClick}
      />
      <ButtonH
        id="talk"
        fullWidth
        text="Talks"
        content={<ChatBubble />}
        isSelected={currentLocation === 'talk'}
        onClick={onClick}
      />
      <ButtonH
        id="setting"
        fullWidth
        text="Setting"
        content={<MoreHoriz />}
        isSelected={currentLocation === 'setting'}
        onClick={onClick}
      />
    </Box>
  );
}

export default AppFooter;
