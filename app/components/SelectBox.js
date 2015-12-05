import React from 'react';
import {AppActions} from '../actions/app-actions'

class SelectBox extends React.Component{

  callAppActions(){
    let sentimentValue = this.refs.sentiment.value;
    AppActions.updateClickedStatus();
    AppActions.getLyric(sentimentValue);
  }

  render() {
    return (
      <div>
        <select ref = "sentiment">
          <option> real </option>
          <option> saving women </option>
          <option> got the juice </option>
          <option> started from the bottom </option>
          <option> trust issues </option>
          <option> miss you </option>
          <option> love </option>
        </select>
        <button
          className="btn btn-success"
          onClick={this.callAppActions.bind(this)}>
          Random Drake Lyric
        </button>
      </div>
    )
  }
}

export default SelectBox
