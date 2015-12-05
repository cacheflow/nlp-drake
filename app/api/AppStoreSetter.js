import {formatLyric} from '../utils/format.js';

const AppStoreSetter = {
  selected: "",
  tweetText: "",
  templateText: "",
  clicked: false,

  setTweetText(lyric) {
    let templateTextLyric = lyric; 
    this.setTemplateText(templateTextLyric); 
    let formattedLyricForTweet = formatLyric(lyric);
    this.tweetText = formattedLyricForTweet;
    this.setClickedState(false);
  },

  setSelected(action) {
    this.selected = action;
  },

  setTemplateText(lyric) {
    this.templateText = lyric;
  },

  setClickedState(bool) {
    this.clicked = bool;
  }
}

export default AppStoreSetter
