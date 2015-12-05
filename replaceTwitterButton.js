var twitter = {
  createNewTwitterButton() {
   var newTwitterButton = document.createElement("a");
   newTwitterButton.setAttribute("id", "twitter-share");
   newTwitterButton.setAttribute("href", "https://twitter.com/intent/tweet?text=dam%20son");
   newTwitterButton.setAttribute('data-size', 'large');
   this.createNewTwitterLogo(newTwitterButton);
 },

 createNewTwitterLogo(newTwitterButton) {
   var createNewTwitterLogo = document.createElement("img");
   createNewTwitterLogo.id = "twitter-bird";
   createNewTwitterLogo.src = "twitter.png";
   newTwitterButton.appendChild(createNewTwitterLogo);
   this.replaceOldTwitterLogo(newTwitterButton);
 },

 replaceOldTwitterLogo(newTwitterButton) {
   var mainDivContainer = document.getElementById("tweet-container");
   var twitterShareButton = mainDivContainer.children[0];
   mainDivContainer.removeChild(twitterShareButton);
   mainDivContainer.appendChild(newTwitterButton);
 }
 
}
