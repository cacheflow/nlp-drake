import classifier from '../bayes/learn.js'
import drakeLyricsFile from './drake.json';
import * as Promise from 'bluebird'
import 'es6-promise-polyfill';
import fetch from 'isomorphic-fetch';



export default {

  drakeLyricsInArray: [],
  readDrakeFile(sentiment) {
    return fetch('/app/api/drake.json').then((drakeData) => {
      return drakeData.json();
    }).then((drakeData) => {
      this.parseDrakeLyrics(drakeData, sentiment);
    }).then(() => {
      return this.getRandomDrakeLyric();
    });
  },

  parseDrakeLyrics(drakeFileAsJson, sentiment) {
    for(var key in Object.keys(drakeFileAsJson)) {
      if(sentiment == classifier.categorize(drakeFileAsJson[key].lyric)) {
        this.drakeLyricsInArray.push(drakeFileAsJson[key].lyric);
      }
    }
  },

  getRandomDrakeLyric() {
    let randomDrakeLyric = this.drakeLyricsInArray[Math.floor(Math.random() * this.drakeLyricsInArray.length)];
    return randomDrakeLyric;
  }

}


