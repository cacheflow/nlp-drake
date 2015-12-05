import React from 'react';

class Tweet extends React.Component{
  render() {
    if(this.props.clicked) {
      return (
        <img src="../images/loading-spinner.gif"></img>
      )
    }
    else if(this.props.tweetText.length > 0){
      let hrefText = `https://twitter.com/intent/tweet?text=${this.state.tweetText}`;
      return (
        <div>
          <div>
            <p> {this.props.templateText} </p>
            <a className="btn btn-primary"
            href={hrefText}
            > Tweet it </a>
          </div>
        </div>
      )
    }
  }
}


export {Tweet}
