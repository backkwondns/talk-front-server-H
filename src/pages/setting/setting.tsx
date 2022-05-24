import { Box } from '@mui/material';
import React from 'react';
import { ButtonH } from 'src/atoms';
import { useNavigate } from 'react-router-dom';
import { gql, useMutation } from '@apollo/client';
import { accessTokenFunction } from 'src/libs';

function Setting(): JSX.Element {
  const navigate = useNavigate();
  const logOut = gql`
    mutation logout {
      logout
    }
  `;
  const [logoutMutation, { client }] = useMutation(logOut);
  const onLogout = async () => {
    await logoutMutation();
    await client.resetStore();
    accessTokenFunction.setAccessToken('');
    navigate('/');
  };

  return (
    <Box>
      <ButtonH content="logout" onClick={onLogout} />

      <span>Setting</span>
    </Box>
  );
}

export default Setting;
