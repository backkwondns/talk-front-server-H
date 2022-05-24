import { makeAutoObservable, set } from 'mobx';
import { layoutInterface, talksInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class TalksStore {
  rootStore: RootStore;

  talksList: talksInterface.talksListInterface[] | null = null;

  selectedRoom: talksInterface.detailInterface | undefined = undefined;

  typingText: talksInterface.typingTextInterface[] = [];

  rangeOfTalk = 50;

  addedTalk = 0;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getTalksList() {
    return this.talksList;
  }

  setTalksList(talks: talksInterface.talksListInterface[]) {
    this.talksList = talks.filter((talk) => talk.lastContent !== null);
  }

  get getSelectedRoom() {
    return this.selectedRoom;
  }

  setSelectedRoom(talk: talksInterface.detailInterface | undefined) {
    if (talk !== undefined) {
      this.selectedRoom = talk;
      const detailRoom = this.talksList?.find((talks: talksInterface.talksListInterface) => {
        return talks.id === talk.id;
      });
      this.selectedRoom.avatar = detailRoom!.avatar;
      this.selectedRoom.userName = detailRoom!.userName;
      if (!this.typingText.find((value: talksInterface.typingTextInterface) => value.id === talk.id))
        this.initTypingText(talk.id);
    } else {
      this.selectedRoom = undefined;
    }
  }

  setSelectedRoomFromProfile(talk: talksInterface.detailInterface, userInfo: layoutInterface.userInfoInterface) {
    this.selectedRoom = talk;
    this.selectedRoom.avatar = [userInfo.setting.avatar];
    this.selectedRoom.userName = [userInfo.userName];
    if (!this.typingText.find((value: talksInterface.typingTextInterface) => value.id === talk.id))
      this.initTypingText(talk.id);
  }

  pushNewTalkSelectedRoom(newTalk: talksInterface.talk) {
    if (this.selectedRoom) {
      this.selectedRoom.talk = [newTalk, ...this.selectedRoom.talk];
    }
  }

  pushSelectedRoomLoadMore(talkAppend: talksInterface.talk[]) {
    if (this.selectedRoom) {
      this.selectedRoom.talk = [...this.selectedRoom.talk, ...talkAppend].filter(
        (v, i, a) => a.findIndex((t) => t.id === v.id) === i,
      );
    }
  }

  get getTypingText() {
    const result = this.typingText.find(
      (value: talksInterface.typingTextInterface) => value.id === this.selectedRoom!.id,
    );
    return result!.text;
  }

  setTypingText(text: string) {
    this.typingText.find((value) => value.id === this.selectedRoom!.id)!.text = text;
  }

  initTypingText(id: string) {
    this.typingText.push({ id, text: '' });
  }

  get getAddedTalk() {
    return this.addedTalk;
  }

  plusAddedTalk() {
    this.addedTalk += 1;
  }

  initAddedTalk() {
    this.addedTalk = 0;
  }

  get getRangeOfTalk() {
    return this.rangeOfTalk;
  }

  plusRangeOfTalk(plus: number) {
    this.rangeOfTalk += plus;
  }

  initRangeOfTalk() {
    this.rangeOfTalk = 50;
  }

  get getHasMore() {
    if (this.selectedRoom) {
      // eslint-disable-next-line no-unsafe-optional-chaining
      return this.selectedRoom?.talkCount - this.rangeOfTalk - this.addedTalk > 0;
    }
    return false;
  }
}
