                  // back end

var pigLatin = function(input) {
  var wordArray = input.split(' ');
  var finalArray = [];
  wordArray.forEach(function(str) {
    str = str.toLowerCase();
    if (str[0].match(/[aeiou]/)) {
      str = str + "ay";
    } else if (str.substr(0,2) === 'qu') {
      str = str.replace('qu', '');
      str = str + 'quay';
    } else if (str.substr(0,3) === 'squ') {
      str = str.replace('squ', '');
      str = str + 'squay';
    } else {
      str = str.split('');
      while (str[0].match(/[b-df-hj-np-tv-z]/)) {
        str.push(str[0]);
        str.shift(str[0]);
      }
      str = str.join('');
      str = str + 'ay'
    }
    finalArray.push(str);
  });
  var result = finalArray.join(' ');
  return result;
};

                  // front end
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userStr = $('#userInput').val();
    var result = pigLatin(userStr);


    $('#out').text(result);
    $('#output').show();
  });
});
