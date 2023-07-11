var makeOrangeDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('blueDancer');
};

makeOrangeDancer.prototype = Object.create(dancer.prototype);
makeOrangeDancer.prototype.constructor = makeOrangeDancer;
var oldStep = dancer.prototype.step;

// makeOrangeDancer.prototype.step = function() {
//   oldStep.call(this);
//   this.$node.fadeIn();
//   this.$node.fadeOut();
// };

makeOrangeDancer.prototype.lineUp = function() {
  this.$node.animate({
    top: 300
  });
};
