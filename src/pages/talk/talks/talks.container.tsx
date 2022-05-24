import React, { useContext, useEffect } from 'react';
import { Box } from '@mui/material';
import { MobXProviderContext, observer } from 'mobx-react';
import { useLazyQuery, useMutation, useQuery, useSubscription } from '@apollo/client';
import Talks from './talks';

function TalksContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const userName = rootStore.loginStore.getUserInfo?.userName;
  const getAllTalk = rootStore.graphStore.getAllTalks;
  const talksList = rootStore.talksStore.getTalksList;
  const search = rootStore.layoutStore.getSearch;
  const selectedRoom = rootStore.talksStore.getSelectedRoom;
  const detailTalk = rootStore.graphStore.getDetailTalk;
  const newTalk = rootStore.graphStore.getNewTalk;
  const rangeOfTalk = rootStore.talksStore.getRangeOfTalk;
  const listOfTalkID: string[] = [];

  const { subscribeToMore, refetch } = useQuery(getAllTalk, {
    variables: {
      userName,
    },
    onCompleted: (talksList) => {
      rootStore.talksStore.setTalksList(talksList.getAllTalk);
      talksList.getAllTalk.forEach((talk: any) => {
        listOfTalkID.push(talk.id);
      });

      subscribeToMore({
        document: newTalk,
        variables: { talkID: listOfTalkID },
        updateQuery: (prev) => {
          refetch();
          return prev;
        },
      });
    },
  });

  const [detailTalkMutation] = useMutation(detailTalk, {
    fetchPolicy: 'network-only',
    onCompleted: (data) => rootStore.talksStore.setSelectedRoom(data.detailTalk),
  });

  const onTalk = (event: React.MouseEvent<HTMLButtonElement>) => {
    const targetID = event.currentTarget.id;
    rootStore.layoutStore.pushCoverPage('room');
    detailTalkMutation({ variables: { talkID: targetID, from: 0, to: rangeOfTalk } });
  };

  const onEvent = {
    onTalk,
  };
  return (
    <Box>
      <Talks talksList={talksList} search={search} onEvent={onEvent} />
    </Box>
  );
}

export default observer(TalksContainer);
