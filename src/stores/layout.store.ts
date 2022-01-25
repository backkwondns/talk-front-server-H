import { makeAutoObservable } from 'mobx';
import { layoutInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class LayoutStore {
  rootStore: RootStore;

  currentLocation: layoutInterface.currentLocationInterface = 'friend';

  isLoading = true;

  openSearch: null | Element = null;

  search = '';

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
}
