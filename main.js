
 // Array of Quotes
const jokes = [
      '"We have a saying in Morocco that goes, " Every Moroccan will go to heaven.Because nobody goes to hell twice',
      '"I told my wife that she was drawing her eyebrows too high. She looked surprised',
      '"Parallel lines have so much in common. it is a shame they will never meet',
      '"Why Java developers wear glasses? Because they cant C#',
      '"They asked a web developer to tell them the color of roses. He told them #ff000',

]
function newJoke(){
  let randomNumber = Math.floor(Math.random() * (jokes.length));

document.getElementById("jokesDisplay").innerHTML = jokes[randomNumber];
};

// Tweet Quote
const twitterBtn = document.getElementById('twitter');
function tweetQuote() {
  const quote = quoteText.innerText;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quote}`;
  window.open(twitterUrl, '_blank');
}
twitterBtn.addEventListener('click', tweetQuote);
