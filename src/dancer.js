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
  console.log(this);
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  //setTimeout( function () { this.call(); }, this.timeBetweenSteps);
};

dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  this.$node.css(this.styleSettings);
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
//dancer.setPosition(top, left);