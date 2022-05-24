import { Box, Slide } from '@mui/material';
import React, { useEffect } from 'react';
import { talksInterface } from 'src/interfaces';
import { CloseButtonH, IconButtonH, InputH, PrintH } from 'src/atoms';
import { NavigateBefore, Send } from '@mui/icons-material';
import { Loading, RoomChatH } from 'src/organisms';

function Room(props: talksInterface.roomInterface): JSX.Element {
  const { zIndex, selectedRoom, typingText, refs, onEvent } = props;
  const { avatar, userName, talk } = selectedRoom;
  const { inputRef, lastTalkRef } = refs;
  const { onClose, onAvatar, onChangeText, onPressEnter, onSend } = onEvent;
  const inputHeight = inputRef.current.clientHeight;

  return (
    <Slide in={Boolean(selectedRoom)} direction="left" timeout={150} mountOnEnter unmountOnExit>
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
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CloseButtonH onClose={onClose} icon={<NavigateBefore />} />

        <Box
          sx={{
            display: 'flex',
            position: 'absolute',
            top: 0,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '56px',
            // m: 1.5,
            '& :before': {
              content: '""',
              position: 'absolute',
              top: 56,
              left: 1,
              right: 1,
              borderBottom: '1px #dfdfe5 solid',
            },
          }}
        >
          <PrintH sx={{ maxWidth: '60%' }} text={userName.toString()} />
        </Box>
        <Box
          sx={{
            width: '100%',
            top: '56px',
            position: 'absolute',
            height: `calc(100vh - 56px - 10px - ${inputHeight}px)`,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column-reverse',
          }}
        >
          {talk.map((value: talksInterface.talk, index) => {
            return (
              <Box key={value.id} ref={talk.length === index + 1 ? lastTalkRef : null} sx={{ width: '100%' }}>
                {userName.includes(value.from) ? (
                  <RoomChatH
                    content={value.content}
                    avatar={avatar[userName.indexOf(value.from)]}
                    userName={value.from}
                    onAvatar={onAvatar}
                    before={talk[index + 1] ? talk[index + 1].from : ''}
                  />
                ) : (
                  <RoomChatH
                    key={value.id}
                    content={value.content}
                    before={talk[index + 1] ? talk[index + 1].from : ''}
                  />
                )}
              </Box>
            );
          })}
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            position: 'absolute',
            bottom: 0,
            background: 'background.paper',
            borderTop: '1px #dfdfe5 solid',
          }}
          ref={inputRef}
        >
          <InputH
            sx={{ p: 0.5 }}
            multiline
            fullWidth
            maxRows={4}
            value={typingText}
            onChange={onChangeText}
            onKeyPress={onPressEnter}
          />
          <IconButtonH icon={<Send />} onClick={onSend} />
        </Box>
      </Box>
    </Slide>
  );
}

export default Room;
