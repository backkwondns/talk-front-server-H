import { makeAutoObservable } from 'mobx';
import { layoutInterface } from 'src/interfaces';
import RootStore from './root.store';

export default class LayoutStore {
  rootStore: RootStore;

  currentLocation: layoutInterface.currentLocationInterface = 'friend';

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
}
