$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('.floor').height() * Math.random(),
      $('.floor').width() * Math.random(),
      Math.random() * 1000
    );
    //push dancer
    window.dancers.push(dancer);
    $('.floor').append(dancer.$node);
  });
});


// Button Event Listeners
// Line Up

$('.lineUpButton').on('click', function() {
  // iterate through dancers array
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].lineUp();
  }
});

// Interact with one another
$('.PartnerUpButton').on('click', function() {
  // iterate through dancers array
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].partnerUp();
  }
});

// Interact with one another
$('body').on('mouseenter', '.dancer', function() {
  $(this).css('border-color', 'white');
});

$('body').on('mouseleave', '.dancer', function() {
  $(this).css('border-color', '');
});

$('body').on('mouseenter', '.jack', function() {
  alert('youre touching me');
});

