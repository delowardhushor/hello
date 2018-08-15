import { observable, action, computed } from 'mobx';

class AppStore {

  @observable Setting = {"theme":"light"};
  

  constructor() { 
    
    
  }


}

const singleton = new AppStore();
export default singleton;