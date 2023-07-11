var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(dancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
var oldStep = dancer.prototype.step;

makeBlinkyDancer.prototype.step = function() {

  oldStep.call(this);
  this.$node.toggle();
};

makeBlinkyDancer.prototype.lineUp = function() {
  //alert('working');
  this.$node.animate({
    top: 100
  });
};

