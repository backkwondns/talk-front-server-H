import React from 'react';
import { Box } from '@mui/material';
import { AvatarH, PrintH, SpeechBubbleH } from 'src/atoms';
import { organismsInterface } from 'src/interfaces';

function RoomChatH(props: organismsInterface.roomChatInterface): JSX.Element {
  const { userName, avatar, content, before, onAvatar } = props;
  if (userName) {
    return (
      <Box sx={{ display: 'flex', p: 1 }}>
        {before === userName ? (
          <Box sx={{ width: '40px' }} />
        ) : (
          <AvatarH content={avatar} id={userName} onClick={onAvatar} />
        )}
        <Box sx={{ ml: 2.5, display: 'flex', flexDirection: 'column' }}>
          {before === userName ? null : <PrintH text={userName} />}

          <SpeechBubbleH text={content} />
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row-reverse', p: 1 }}>
      <SpeechBubbleH text={content} reverse />
    </Box>
  );
}

export default RoomChatH;
