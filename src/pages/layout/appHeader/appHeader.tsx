import { Box, Popover } from '@mui/material';
import { AvatarH, IconButtonH, InputH, PrintH } from 'src/atoms';
import React from 'react';
import { layoutInterface } from 'src/interfaces';
import { commonFunction } from 'src/libs';
import { AddCommentOutlined, PersonAddOutlined, RestartAlt, Search } from '@mui/icons-material';

function AppHeader(props: layoutInterface.appHeaderInterface) {
  const { currentLocation, userInfo, openSearch, search, onEvent } = props;
  const { onAvatar, onSearch, onChangeSearch, onPressEnter, onReset, onFriendAddBar, onTalkAdd } = onEvent;
  const { setting } = userInfo;

  const openPopover = Boolean(openSearch);

  const id = openPopover ? 'simple-popover' : undefined;

  return (
    <Box>
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
        {currentLocation !== 'setting' ? (
          <Box sx={{ display: 'flex ', alignItems: 'center', px: 1 }}>
            <IconButtonH
              sx={{ px: 1 }}
              icon={currentLocation === 'friend' ? <PersonAddOutlined /> : <AddCommentOutlined />}
              onClick={currentLocation === 'friend' ? onFriendAddBar : onTalkAdd}
            />
            <IconButtonH sx={{ px: 1 }} icon={<RestartAlt />} onClick={onReset} />
            <IconButtonH sx={{ px: 1 }} icon={<Search />} onClick={onSearch} />
            <Popover
              id={id}
              open={openPopover}
              anchorEl={openSearch}
              onClose={onSearch}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              sx={{ zIndex: 1000 }}
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
        ) : null}
      </Box>
    </Box>
  );
}

export default AppHeader;
