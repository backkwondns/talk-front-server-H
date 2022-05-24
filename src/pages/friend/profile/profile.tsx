import { Box, Slide } from '@mui/material';
import React from 'react';
import { friendInterface } from 'src/interfaces';
import { AvatarH, ButtonH, CloseButtonH, PrintH } from 'src/atoms';
import { ChatBubble, Person, Phone } from '@mui/icons-material';

function Profile(props: friendInterface.profileInterface): JSX.Element {
  const { zIndex, userInfo, selectedFriend, onEvent } = props;
  const { onProfileClose, onTalk, onCall, onProfile } = onEvent;
  return (
    <Slide in={Boolean(selectedFriend)} direction="up" timeout={150} mountOnEnter unmountOnExit>
      <Box
        sx={{
          position: 'absolute',
          width: '100vw',
          height: '100vh',
          top: 0,
          backgroundColor: 'background.paper',
          zIndex,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <CloseButtonH onClose={onProfileClose} />
        <Box sx={{ p: 1 }}>
          <AvatarH sx={{ width: '86px', height: '86px' }} content={selectedFriend.setting.avatar} />
        </Box>
        <Box sx={{ p: 1, textAlign: 'center' }}>
          <PrintH variant="h5" text={selectedFriend.userName} />
          <PrintH text={selectedFriend.setting.statusMessage} />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            bottom: 0,
            width: '100vw',
            display: 'flex',
            borderTop: '1px solid #dfdfe5',
            backgroundColor: 'background.paper',
          }}
        >
          {userInfo.userName === selectedFriend.userName ? (
            <ButtonH sx={{ height: '112px' }} fullWidth text="Profile" content={<Person />} onClick={onProfile} />
          ) : (
            <>
              <ButtonH sx={{ height: '112px' }} fullWidth text="Chatting" content={<ChatBubble />} onClick={onTalk} />
              <ButtonH sx={{ height: '112px' }} fullWidth text="Call" content={<Phone />} onClick={onCall} />
            </>
          )}
        </Box>
      </Box>
    </Slide>
  );
}

export default Profile;
