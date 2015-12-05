import AppStore from '../stores/app-store'

let AppState = () => {
  return {
    selected: AppStore.getSelected(),
    tweetText: AppStore.getTweetText(),
    templateText: AppStore.getTemplateText(),
    clicked: AppStore.clickedState()
  };
}

export  AppState; 
