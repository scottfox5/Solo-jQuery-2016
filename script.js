$(function(){//document ready
  $('button').click(function(){ //listens for click on button
    var color = $(this).data('color');//retrieves color data and stores it in a variable
    var $block = $('<div class="color-cube '+color+'"></div')//creates div with class of the color value
    $('.container').append($block);//appends div to DOM
    var i = $('#'+color).text();//sets i to current number next to counter
    i++;//increments the value of i
    $('#'+color).text(i);//updates the text on the DOM
  })
});


// //This is my second solution; it incudes an object with the colors as the property and their values set to 0
// var colorCount = {//object of color counters so their value can be accessed and incremented dynamically
//    red: 0,
//    yellow: 0,
//    blue: 0,
//    green: 0,
// }
//
// $(function(){//document ready
//   $('button').click(function(){ //listens for click on button
//     var color = $(this).data('color');//retrieves color data and stores it in a variable
//     var $block = $('<div class="color-cube '+color+'"></div')//creates div with class of the color value
//     $('.container').append($block);//appends div to DOM
//     colorCount[color]++;//increments color counter
//     $('#'+color).text(colorCount[color]);//updates color count text on DOM
//   })
// });


// //This is my first solution; it includes four varaibles to control counter
// //and a long conditional statment to determine which counter to update
// $(function(){//document ready
//    var redCounter = 0;//declare variables of each counter
//    var yellowCounter = 0;
//    var blueCounter = 0;
//    var greenCounter = 0;
//    $('button').on('click', function(){//event listener
//      var color = $(this).data('color');//retrieves color data corresponding to button clicked
//      $('.container').append('<div class="color-cube '+color+'"></div');//appends div with value of color
//      if (color == 'red'){//conditional statement to determine which counter to update
//        redCounter++;
//        $('#'+color).text(redCounter);
//      } else if (color == 'yellow'){
//        yellowCounter++;
//        $('#'+color).text(yellowCounter);
//      } else if (color == 'blue'){
//        blueCounter++;
//        $('#'+color).text(blueCounter);
//      } else if (color == 'green'){
//        greenCounter++;
//        $('#'+color).text(greenCounter);
//      };
//    })
//  });
