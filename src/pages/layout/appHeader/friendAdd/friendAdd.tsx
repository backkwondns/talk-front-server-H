import React from 'react';
import { Box, Collapse, ListItemButton, ListItemText, Slide } from '@mui/material';
import { AvatarH, ButtonH, CloseButtonH, IconButtonH, InputH, PrintH } from 'src/atoms';
import { AccountBox, AlternateEmail, Close, PersonAddOutlined, Phone, Search } from '@mui/icons-material';
import { layoutInterface } from 'src/interfaces';
import { commonFunction } from 'src/libs';

function FriendAdd(props: layoutInterface.friendAddInterface): JSX.Element {
  const { openFriendAddBar, openFriendAdd, friendSearchResult, onEvent } = props;
  const { onFriendAddBar, onFriendAdd, onFriendSearch, onChangeSearch, onPressEnter, onClickFriendAdd } = onEvent;

  return (
    <Box>
      <Collapse in={openFriendAddBar} timeout={0} mountOnEnter unmountOnExit>
        <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', position: 'absolute', top: 0 }}>
          <Box
            sx={{
              backgroundColor: 'background.paper',
              height: '100px',
              zIndex: 100000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <CloseButtonH onClose={onFriendAddBar} />
            <PrintH text="Friend Add" />
            <Box sx={{ justifyContent: 'space-around', display: 'flex', flexDirection: 'row', width: '100%' }}>
              <ButtonH
                fullWidth
                id="email"
                text="Email"
                content={<AlternateEmail />}
                onClick={onFriendAdd}
                isSelected={openFriendAdd === 'email'}
              />
              <ButtonH
                fullWidth
                id="userName"
                text="Name"
                content={<AccountBox />}
                onClick={onFriendAdd}
                isSelected={openFriendAdd === 'name'}
              />
              <ButtonH
                fullWidth
                id="phoneNumber"
                text="Phone"
                content={<Phone />}
                onClick={onFriendAdd}
                isSelected={openFriendAdd === 'phone'}
              />
            </Box>
          </Box>
          <Slide in={Boolean(openFriendAdd)} mountOnEnter unmountOnExit>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '100vw',
                height: '120px',
                backgroundColor: 'background.paper',
                px: 0.5,
                zIndex: 10000,
              }}
            >
              <Box sx={{ display: 'flex' }}>
                <InputH
                  label={commonFunction.upperFirstLetter(openFriendAdd)}
                  variant="standard"
                  fullWidth
                  onChange={onChangeSearch}
                  onKeyPress={onPressEnter}
                />
                <ButtonH content={<Search />} color="secondary" onClick={onFriendSearch} />
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  width: '100%',
                  height: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {friendSearchResult ? (
                  <Box sx={{ display: 'flex', width: '100%' }}>
                    <ListItemButton sx={{ p: 0, ml: 1, width: 'calc(100% - 64px)' }}>
                      <AvatarH sx={{ mr: 1 }} content={friendSearchResult.setting.avatar} />
                      <ListItemText
                        primary={friendSearchResult.userName}
                        secondary={friendSearchResult.setting.statusMessage}
                        secondaryTypographyProps={{
                          sx: { overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' },
                        }}
                      />
                    </ListItemButton>
                    <ButtonH
                      sx={{ p: 0, pr: 1 }}
                      disabled={friendSearchResult.friend}
                      content={<PersonAddOutlined />}
                      color="secondary"
                      onClick={onClickFriendAdd}
                    />
                  </Box>
                ) : (
                  <PrintH
                    sx={{ width: '100%', textAlign: 'center', alignItems: 'center' }}
                    text={friendSearchResult === undefined ? 'Search' : 'Not Found!'}
                  />
                )}
              </Box>
            </Box>
          </Slide>
          <Box
            sx={{
              backgroundColor: 'rgba(0,0,0,0.3)',
              overflow: 'auto',
              height: openFriendAdd ? 'calc(100vh - 214px)' : 'calc(100vh - 100px)',
              zIndex: 10000,
            }}
            onClick={onFriendAddBar}
          />
        </Box>
      </Collapse>
    </Box>
  );
}

export default FriendAdd;
