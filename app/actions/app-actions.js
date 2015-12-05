import AppConstants from '../constants/app-constants';
import _AppDispatcher from '../dispatchers/app-dispatcher';
import Drake from '../api/drake';

const AppActions = {

  getLyric(sentiment) {
   Drake.readDrakeFile(sentiment).then((lyric) => {
     _AppDispatcher.handleAction({
       type: AppConstants.GET_LYRIC,
       data: lyric
     });
   });
  }, 

  updateClickedStatus() {
    _AppDispatcher.handleAction({
      type: AppConstants.UPDATE_CLICKED_STATUS, 
      data: true 
    }); 
  }
}

export {AppActions}