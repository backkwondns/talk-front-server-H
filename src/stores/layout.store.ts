import { makeAutoObservable } from 'mobx';
import { layoutInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class LayoutStore {
  rootStore: RootStore;

  currentLocation: layoutInterface.currentLocationInterface = 'friend';

  isLoading = true;

  openSearch: null | Element = null;

  openFriendAddBar = false;

  openFriendAdd: layoutInterface.friendAddMethodInterface = '';

  search = '';

  friendSearch = '';

  friendSearchResult: layoutInterface.userInfoInterface | undefined | false = undefined;

  constructor(rootStore: RootStore) {
    makeAutoObservable(this);
    this.rootStore = rootStore;
  }

  get getCurrentLocation() {
    return this.currentLocation;
  }

  setCurrentLocation(targetLocation: layoutInterface.currentLocationInterface) {
    this.currentLocation = targetLocation;
  }

  get getIsLoading() {
    return this.isLoading;
  }

  setIsLoading() {
    this.isLoading = false;
  }

  get getOpenSearch() {
    return this.openSearch;
  }

  setOpenSearch(clicked: null | Element) {
    this.openSearch = this.openSearch ? null : clicked;
  }

  get getSearch() {
    return this.search;
  }

  setSearch(value: string) {
    this.search = value;
  }

  get getOpenFriendAddBar() {
    return this.openFriendAddBar;
  }

  toggleOpenFriendAddBar() {
    this.openFriendAddBar = !this.openFriendAddBar;
  }

  get getOpenFriendAdd() {
    return this.openFriendAdd;
  }

  setOpenFriendAdd(method: layoutInterface.friendAddMethodInterface) {
    this.openFriendAdd = method;
  }

  get getFriendSearch() {
    return this.friendSearch;
  }

  setFriendSearch(value: string) {
    this.friendSearch = value;
  }

  get getFriendSearchResult() {
    return this.friendSearchResult;
  }

  setFriendSearchResult(value: layoutInterface.userInfoInterface | false | undefined) {
    this.friendSearchResult = value;
  }

  setFriendSearchResultDisable() {
    if (this.friendSearchResult) {
      this.friendSearchResult.friend = true;
    }
  }
}
