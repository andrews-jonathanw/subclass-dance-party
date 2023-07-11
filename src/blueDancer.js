var makeBlueDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueDancer');
};

makeBlueDancer.prototype = Object.create(dancer.prototype);
makeBlueDancer.prototype.constructor = makeBlueDancer;
var oldStep = dancer.prototype.step;

makeBlueDancer.prototype.step = function() {

  oldStep.call(this);

  this.$node.toggle();
};
