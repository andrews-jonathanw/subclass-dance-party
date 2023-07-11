// Creates and returns a new dancer object that can step
var dancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.styleSettings = {
    top: top,
    left: left
  };
  this.step();
  this.setPosition();
};

// use jQuery to create an HTML <span> tag

dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //console.log('in dancer step prototype');
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //setTimeout( function () { this.call(); }, this.timeBetweenSteps);
};

dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css(this.styleSettings);
};

// create partnerup prototype
dancer.prototype.partnerUp = function() {
  // create a myLoc var
  var myLoc = {
    top: this.top, // x
    left: this.left // y
  };
  var minDist = Infinity;
  var closestDancer = null;
  // iterate over dancers in array
  var dancers = window.dancers;
  for (var i = 0; i < dancers.length; i++) {
    // check if dancer location is closer than closestDancer
    // create var to hold currentDancerLoc

    var currentDancerLoc = {
      top: dancers[i].top, // x
      left: dancers[i].left // y
    };
    // skip over the invoking dancer
    if (currentDancerLoc.top !== myLoc.top && currentDancerLoc.left !== myLoc.top) {
      // create distance var
      var distance = Math.sqrt((myLoc.top - currentDancerLoc.top) * (myLoc.top - currentDancerLoc.top) + (myLoc.left - currentDancerLoc.left) * (myLoc.left - currentDancerLoc.left));
      // update closestDancer if true
      if (minDist > distance) {
        minDist = distance;
        closestDancer = dancers[i];
      }
      this.$node.animate({
        top: closestDancer.top,
        left: closestDancer.left,
      }, 1000);
    }
  }
  //alert(myLoc.top + ' ' + myLoc.left + 'this is the closest: ' + closestDancer.top + ' ' + closestDancer.left);


};

