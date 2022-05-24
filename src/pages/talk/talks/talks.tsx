import { Box, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import { ListH } from 'src/atoms';
import { talksInterface } from 'src/interfaces';
import { MultiAvatarH } from 'src/organisms';
import { timeFunction } from 'src/libs';

function Talks(props: talksInterface.talksInterface): JSX.Element {
  const { talksList, search, onEvent } = props;
  const { onTalk } = onEvent;
  return (
    <Box>
      <ListH disablePadding>
        {talksList !== null
          ? talksList
              .filter(
                (talk: talksInterface.talksListInterface) =>
                  talk.userName.filter((talkUserName) => talkUserName.includes(search)).length >= 1,
              )
              .map((talk: talksInterface.talksListInterface) => {
                return (
                  <ListItemButton key={talk.id} id={talk.id} onClick={onTalk} divider>
                    <MultiAvatarH avatars={talk.avatar} />
                    <ListItemText
                      sx={{ p: 1, maxWidth: '50%' }}
                      primary={talk.userName.toString()}
                      secondary={talk.lastContent}
                      secondaryTypographyProps={{
                        sx: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                      }}
                    />
                    <ListItemText sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                      {timeFunction.dateTimeCalc(talk.updatedAt)}
                    </ListItemText>
                  </ListItemButton>
                );
              })
          : null}
      </ListH>
    </Box>
  );
}

export default Talks;
