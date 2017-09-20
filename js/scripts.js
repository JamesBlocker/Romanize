                  // back end


                  // front end
$(document).ready(function() {
  $('form#input').submit(function(event) {
    event.preventDefault();
    var userStr = $('#userInput').val();
    var result = romanize(userStr);


    $('#out').text(result);
    $('#output').show();
  });
});
