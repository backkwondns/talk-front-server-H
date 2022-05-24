import { Box } from '@mui/material';
import React from 'react';
import { AvatarH } from 'src/atoms';
import { organismsInterface } from 'src/interfaces';

function MultiAvatarH(props: organismsInterface.multiAvatarInterface): JSX.Element {
  const { size = { width: '56px', height: '56px' }, sx, avatars } = props;
  if (avatars.length === 1) {
    return <AvatarH sx={{ ...size, ...sx }} content={avatars[0]} />;
  }
  if (avatars.length === 2) {
    return (
      <Box sx={{ ...size, ...sx }}>
        <AvatarH sx={{ width: 'calc(100% * 0.66)', height: 'calc(100% * 0.66 )' }} content={avatars[0]} />
        <AvatarH
          sx={{ width: 'calc(100% * 0.66)', height: 'calc(100% * 0.66)', bottom: 'calc(35%)', left: 'calc(45%)' }}
          content={avatars[1]}
        />
      </Box>
    );
  }
  if (avatars.length === 3) {
    return (
      <Box
        sx={{
          ...size,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          ...sx,
        }}
      >
        <AvatarH
          sx={{ width: `calc(${size.width} * 0.6)`, height: `calc(${size.height} * 0.6)`, top: 'calc(5%)' }}
          content={avatars[0]}
        />
        <Box sx={{ display: 'flex' }}>
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.6)`, height: `calc(${size.height} * 0.6)` }}
            content={avatars[1]}
          />
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.6)`, height: `calc(${size.height} * 0.6)` }}
            content={avatars[2]}
          />
        </Box>
      </Box>
    );
  }
  if (avatars.length === 4) {
    return (
      <Box sx={{ ...size, display: 'flex', flexDirection: 'column', ...sx }}>
        <Box sx={{ display: 'flex' }}>
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.height} * 0.55)` }}
            content={avatars[0]}
          />
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.height} * 0.55)` }}
            content={avatars[1]}
          />
        </Box>
        <Box sx={{ display: 'flex' }}>
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.height} * 0.55)` }}
            content={avatars[2]}
          />
          <AvatarH
            sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.height} * 0.55)` }}
            content={avatars[3]}
          />
        </Box>
      </Box>
    );
  }
  return (
    <Box sx={{ ...size, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex' }}>
        <AvatarH
          sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.width} * 0.55)` }}
          content={avatars[0]}
        />
        <AvatarH
          sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.width} * 0.55)` }}
          content={avatars[1]}
        />
      </Box>
      <Box sx={{ display: 'flex' }}>
        <AvatarH
          sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.width} * 0.55)` }}
          content={avatars[2]}
        />
        <AvatarH
          sx={{ width: `calc(${size.width} * 0.55)`, height: `calc(${size.width} * 0.55)` }}
          isLetter
          content="+99"
          // content={`+${avatars.length - 4}`}
        />
      </Box>
    </Box>
  );
}

export default MultiAvatarH;
