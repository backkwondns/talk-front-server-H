import React from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { Box, CircularProgress } from '@mui/material';
import { toast } from 'react-toastify';
import { ButtonH } from 'src/atoms';
import { useNavigate } from 'react-router-dom';
import { accessTokenFunction } from 'src/libs';

function Test(): JSX.Element {
  const navigate = useNavigate();
  const userFind = gql`
    query UserFind($userName: String!) {
      userFind(userName: $userName) {
        userName
        email
        phoneNumber
        createdAt
        tokenVersion
      }
    }
  `;
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
  const { loading, error, data } = useQuery(userFind, { variables: { userName: 'Sauer' } });
  if (loading) {
    return <CircularProgress />;
  }
  if (error) {
    toast.error(error.message, { autoClose: 3000 });
  }
  return (
    <Box>
      {data.userFind.createdAt}
      <ButtonH content="logout" onClick={onLogout} />
    </Box>
  );
}

export default Test;
