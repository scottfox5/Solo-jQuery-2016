var colorCount = {//object of color counters so their value can be accessed and incremented dynamically 
   red: 0,
   yellow: 0,
   blue: 0,
   green: 0,
}

$(function(){//document ready
  $('button').click(function(){ //listens for click on button
    var color = $(this).data('color');//retrieves color data and stores it in a variable
    var $block = $('<div class="color-cube '+color+'"></div')//creates div with class of the color value
    $('.container').append($block);//appends div to DOM
    colorCount[color]++;//increments color counter
    $('#'+color).text(colorCount[color]);//updates color count text on DOM
  })
});
