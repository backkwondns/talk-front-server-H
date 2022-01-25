import { Box, IconButton, Popover } from '@mui/material';
import { AvatarH, InputH, PrintH } from 'src/atoms';
import React from 'react';
import { layoutInterface } from 'src/interfaces';
import { commonFunction } from 'src/libs';
import { RestartAlt, Search } from '@mui/icons-material';

function AppHeader(props: layoutInterface.appHeaderInterface) {
  const { currentLocation, userInfo, openSearch, search, onEvent } = props;
  const { onAvatar, onSearch, onChangeSearch, onPressEnter, onReset } = onEvent;
  const { setting } = userInfo;

  const openPopover = Boolean(openSearch);

  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <Box
      sx={{
        display: 'flex',
        height: '56px',
        mb: 1,
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'sticky',
        top: '0',
        backgroundColor: 'background.paper',
        zIndex: 10000,
      }}
    >
      <PrintH sx={{ p: 1 }} text={commonFunction.upperFirstLetter(currentLocation)} variant="h4" />
      <Box sx={{ display: 'flex ', alignItems: 'center', px: 1 }}>
        <IconButton sx={{ px: 1 }} onClick={onReset}>
          <RestartAlt />
        </IconButton>
        <IconButton sx={{ px: 1 }} onClick={onSearch}>
          <Search />
        </IconButton>
        <Popover
          id={id}
          open={openPopover}
          anchorEl={openSearch}
          onClose={onSearch}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          sx={{ zIndex: 100000 }}
        >
          <Box sx={{ width: '95vw', p: 1 }}>
            <InputH
              label="Search"
              value={search}
              color="success"
              fullWidth
              variant="standard"
              onChange={onChangeSearch}
              onKeyPress={onPressEnter}
            />
          </Box>
        </Popover>
        <AvatarH content={setting.avatar} onClick={onAvatar} />
      </Box>
    </Box>
  );
}

export default AppHeader;
