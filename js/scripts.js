function romanize(number) {
  var numerals = {M:1000, CM:900, D:500, CD:400, C:100, XC:90, L:50, XL:40, X:10, IX:9, V:5, IV:4, I:1},
      roman = '',
      i;
  for (i in numerals) {
    while (number >= numerals[i]) {
      roman += i;
      number -= numerals[i];
      alert('number:' + number + ' - roman:' + roman );
    }

  }
  return roman;
};

$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userStr = $('#userInput').val();
    var result = romanize(userStr);


    $('#out').text(result);
    $('#output').show();
  });
});
