import { Box, Slide } from '@mui/material';
import React from 'react';
import { friendInterface } from 'src/interfaces';
import { AvatarH, ButtonH, IconButtonH, PrintH } from 'src/atoms';
import { ChatBubble, Close, Person, Phone } from '@mui/icons-material';

function Profile(props: friendInterface.profileInterface): JSX.Element {
  const { userInfo, selectedFriend, onEvent } = props;
  const { onProfileClose, onTalk, onCall, onProfile } = onEvent;
  return (
    <Box>
      <Slide in={Boolean(selectedFriend)} direction="up" timeout={150} mountOnEnter unmountOnExit>
        <Box
          sx={{
            position: 'absolute',
            width: '100vw',
            height: '100vh',
            top: 0,
            backgroundColor: 'background.paper',
            zIndex: 100000,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <IconButtonH
            sx={{ position: 'absolute', top: 0, left: 0, m: 0.5 }}
            icon={<Close />}
            onClick={onProfileClose}
          />
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
    </Box>
  );
}

export default Profile;
