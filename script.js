$(function(){
  var redCounter = 0;
  var yellowCounter = 0;
  var blueCounter = 0;
  var greenCounter = 0;
  $('button').on('click', function(){
    var color = $(this).data('color');
    $('.container').append('<div class="color-cube '+color+'"></div');
    if (color == 'red'){
      redCounter++;
      $('#'+color).text(redCounter);
    } else if (color == 'yellow'){
      yellowCounter++;
      $('#'+color).text(yellowCounter);
    } else if (color == 'blue'){
      blueCounter++;
      $('#'+color).text(blueCounter);
    } else if (color == 'green'){
      greenCounter++;
      $('#'+color).text(greenCounter);
    };
  })
});
