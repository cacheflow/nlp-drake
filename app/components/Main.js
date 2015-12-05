import React from 'react';
import ReactDOM from 'react-dom';
import DancingDrake from './DancingDrake';
import SelectBox from './SelectBox';
import _AppStore from '../stores/app-store';
import {AppActions} from '../actions/app-actions';

class Main extends React.Component{
  constructor(props) {
   super(props);
   this.state = {
    clicked: false,
    tweetText: "", 
    templateText: ""
   }; 
  }

  componentDidMount() {
    _AppStore.addChangeListener(this._onChange.bind(this));
  }

  componentWillUnMount() {
    _AppStore.removeChangeListener(this._onChange.bind(this));
  }

  _onChange() {
    this.setState({
      clicked: _AppStore.clickedState(),
      tweetText: _AppStore.getTweetText(),
      templateText: _AppStore.getTemplateText()
    });
  }

  clickTwitterLink() {
    document.getElementById('twitter-share').click();
  }

  showTwitterButton() {
    let tweetText = this.state.tweetText
    if(this.state.clicked) {
      return (
        <div> Loading your Drake lyric </div>
      )
    }
    else if(tweetText.length > 1){
      let hrefText = `https://twitter.com/intent/tweet?text=${this.state.tweetText}`;
      return (
        <div>
          <div id ="tweet-button">
            <p id="template-text"> {this.state.templateText} </p>
            <a className="btn btn-primary"
            href={hrefText}
            > Tweet it </a>
          </div>
        </div>
      )
    }
  }

  render(){
    return (
      <div>
       <h1> NLP Drake </h1>
        <DancingDrake></DancingDrake>
        <SelectBox></SelectBox>
        {this.showTwitterButton()}
     </div>
    )
  }
}

ReactDOM.render(<Main/>, document.getElementById("main"));
