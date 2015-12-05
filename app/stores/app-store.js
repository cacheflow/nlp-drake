import _AppDispatcher from '../dispatchers/app-dispatcher'
import AppConstants from '../constants/app-constants'
import {EventEmitter} from 'events';
import AppStoreSetter from '../api/AppStoreSetter'


class AppStore extends EventEmitter{

  clickedState() {
    return AppStoreSetter.clicked;
  }

  getSelected() {
    return AppStoreSetter.selected;
  }

  getTweetText() {
    return AppStoreSetter.tweetText;
  }

  getTemplateText() {
    return AppStoreSetter.templateText;
  }

  emitChange() {
    this.emit('CHANGE')
  }

  addChangeListener(callback) {
    this.on('CHANGE', callback)
  }

  removeChangeListener(callback){
    this.removeChangeListener('CHANGE', callback)
  }

}
let _AppStore = new AppStore();

_AppDispatcher.register((action) => {
      let payload = action.action;
      switch(payload.type) {
        case AppConstants.GET_LYRIC: 
          AppStoreSetter.setTweetText(payload.data);
        break; 

        case AppConstants.UPDATE_CLICKED_STATUS:
          AppStoreSetter.setClickedState(payload.data);
        break;
      }
    

  _AppStore.emitChange()
});

export default _AppStore
