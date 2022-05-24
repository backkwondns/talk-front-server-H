import React from 'react';
import { Box } from '@mui/material';
import { atomsInterface } from 'src/interfaces';
import PrintH from './printH';

function SpeechBubbleH(props: atomsInterface.speechBubbleInterface): JSX.Element {
  const { text, reverse = false } = props;
  return (
    <Box
      sx={{
        ...(reverse
          ? {
              ':after': {
                content: '""',
                position: 'absolute',
                right: 0,
                top: '10%',
                width: 0,
                height: 0,
                border: '11px solid transparent',
                borderLeftColor: 'rgba(212,206,206,0.94)',
                borderRight: 0,
                borderTop: 0,
                // marginTop: '-21.5px',
                marginRight: '-11px',
              },
            }
          : {
              ':after': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '10%',
                width: 0,
                height: 0,
                border: '11px solid transparent',
                borderRightColor: 'rgba(212,206,206,0.94)',
                borderLeft: 0,
                borderTop: 0,
                // marginTop: '-21.5px',
                marginLeft: '-11px',
              },
            }),
        position: 'relative',
        background: 'rgba(212,206,206,0.94)',
        padding: 1,
        mr: 2,
        borderRadius: '.4em',
        minWidth: '12px',
        maxWidth: '80%',
        width: 'fit-content',
        height: 'fit-content',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <PrintH sx={{ wordBreak: 'break-word', textAlign: 'left' }} text={text} />
    </Box>
  );
}

export default SpeechBubbleH;
