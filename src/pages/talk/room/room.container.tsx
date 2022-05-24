import { Box } from '@mui/material';
import React, { useCallback, useContext, useRef } from 'react';
import { MobXProviderContext, observer } from 'mobx-react';
import { useLazyQuery, useMutation, useQuery, useSubscription } from '@apollo/client';
import { talksInterface } from 'src/interfaces';
import Room from './room';

function RoomContainer(): JSX.Element {
  const rootStore = useContext(MobXProviderContext);
  const zIndex = (rootStore.layoutStore.getCoverPage.indexOf('room') + 1) * 100000;
  const userInfo = rootStore.loginStore.getUserInfo;
  const selectedRoom = rootStore.talksStore.getSelectedRoom;
  const typingText = rootStore.talksStore.getTypingText;

  const talkSend = rootStore.graphStore.getSendTalk;
  const newTalk = rootStore.graphStore.getNewTalk;
  const detailTalk = rootStore.graphStore.getDetailTalk;

  const [detailTalkMutation] = useMutation(detailTalk, {
    onCompleted: (data: { detailTalk: talksInterface.detailInterface }) => {
      setTimeout(() => {
        rootStore.talksStore.plusRangeOfTalk(50);
        rootStore.talksStore.pushSelectedRoomLoadMore(data.detailTalk.talk);
      }, 1500);
    },
  });

  const sendUserName = selectedRoom.userName.slice();
  sendUserName.push(userInfo.userName);
  const sendForm = {
    talkID: selectedRoom.id,
    userName: sendUserName,
    talk: { from: userInfo.userName, content: typingText },
  };

  const inputRef = useRef({ clientHeight: 64 });

  const observer: any = useRef();
  const lastTalkRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && rootStore.talksStore.getHasMore) {
        detailTalkMutation({
          variables: { talkID: selectedRoom.id, from: rootStore.talksStore.getRangeOfTalk, to: 50 },
        });
      }
    });
    if (node) observer.current?.observe(node);
  }, []);

  useSubscription(newTalk, {
    variables: { talkID: [selectedRoom.id] },
    onSubscriptionData: (subscriptionData) => {
      rootStore.talksStore.pushNewTalkSelectedRoom(subscriptionData.subscriptionData.data.newTalk.talk);
      rootStore.talksStore.plusRangeOfTalk(1);
      rootStore.talksStore.plusAddedTalk();
    },
  });

  const [talkSendMutation] = useMutation(talkSend);

  const onAvatar = (event: React.MouseEvent<HTMLImageElement>) => {
    rootStore.layoutStore.pushCoverPage('profile');
    rootStore.friendStore.setSelectedFriend(event.currentTarget.id);
  };

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    rootStore.talksStore.setTypingText(event.currentTarget.value);
  };

  const onSend = () => {
    if (typingText !== '') {
      talkSendMutation({
        variables: sendForm,
      });
      rootStore.talksStore.setTypingText('');
    }
  };

  const onPressEnter = (event: React.KeyboardEvent) => {
    if (!rootStore.isMobile) {
      if (event.ctrlKey && event.key === 'Enter') {
        rootStore.talksStore.setTypingText(`${typingText}\n`);
      } else if (event.key === 'Enter') {
        event.preventDefault();
        onSend();
      }
    }
  };

  const onClose = () => {
    rootStore.talksStore.setSelectedRoom(undefined);
    rootStore.layoutStore.popCoverPage();
    rootStore.talksStore.initAddedTalk();
    rootStore.talksStore.initRangeOfTalk();
  };

  const onEvent = {
    onClose,
    onAvatar,
    onChangeText,
    onSend,
    onPressEnter,
    // onLoadMore,
  };
  const refs = {
    inputRef,
    lastTalkRef,
  };
  return (
    <Box>
      <Room zIndex={zIndex} selectedRoom={selectedRoom} typingText={typingText} refs={refs} onEvent={onEvent} />
    </Box>
  );
}

export default observer(RoomContainer);
