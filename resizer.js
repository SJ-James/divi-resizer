jQuery(document).ready(function($){
// Add text resizer buttons after logo
$('<div id="resizer"><button type="button" class="smaller">-</button><span class="resizer-icon"></span><button type="button" class="bigger">+</button></div>').insertAfter('.logo_container a');
// create a fontSize local storage object, but only if one doesn't exist...
if (localStorage.getItem("fontSize") === null) {
// Set that local storage item's value to whatever the value was before it was created...
storeFont = $(".single #main-content p").css("font-size");
localStorage.setItem("fontSize", storeFont );
}
// Get the new fontSize local storage object
storedFont = localStorage.getItem("fontSize");
// Set it as the new font size...
$(".single #main-content p").css("font-size", storedFont );

// If the reduce size button is clicked...
$(".smaller").on("click", function(){
  // Get just the numbers from the current font size
  var fontSize = parseFloat($('.single #main-content p').css("font-size"));
  // Then take away 2 and put 'px' back on...
  if ( fontSize > 10 ) {
  smallerSize = fontSize - 2 + "px";
  } else {
  smallerSize = fontSize + "px";
  }
  // Now set that as the new font-size value...
  $('.single #main-content p').css({'font-size':smallerSize});
  // And update the fontSize local storage object to reflect the new value
  localStorage.setItem("fontSize", smallerSize );
});

$(".bigger").on("click", function(){
  // Get just the numbers from the current font size
  var fontSize = parseFloat($('.single #main-content p').css("font-size"));
  if ( fontSize < 22 ) {
  // Then add 2 and put 'px' back on...
  biggerSize = fontSize + 2 + "px";
  } else {
  biggerSize = fontSize + "px";
  }
  // Now set that as the new font-size value...
  $('.single #main-content p').css({'font-size':biggerSize});
  // And update the fontSize local storage object to reflect the new value
  localStorage.setItem("fontSize", biggerSize );
});

$(".resizer-icon").on("click", function(){
  localStorage.removeItem('fontSize');
  window.location.reload();
});
});
