var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

var oldStep = dancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {

  oldStep.call(this);
  //console.log('in blinkydancer step prototype');
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};