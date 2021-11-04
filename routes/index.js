var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',  {
    phrase: "taco Cat"
  })
});

/*POST thr form data*/
router.post('/', function(req, res){
  res.render( 'index', {
    phrase: req.body.userText,
    message: getResultDescription(req.body.userText)
  })
})










function checkPalindrome(phrase){
  let temp = phrase.split("");
  temp = temp.reverse();
  temp = temp.join("")
  if (phrase.toLowerCase().replace( " ", "") === temp.toLocaleLowerCase().replace(  " ",  "") ){
    return true
  }
  else {
    return false
  }
}

function getResultDescription (phrase){
  if (checkPalindrome(phrase)) {
    return `${phrase} is a palindrome.`
  }
  return `${phrase} is not a palindrome.`
}
module.exports = router;

function palindrome(str) {

  var len = str.length;
  var mid = Math.floor(len/2);

  for ( var i = 0; i < mid; i++ ) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}


