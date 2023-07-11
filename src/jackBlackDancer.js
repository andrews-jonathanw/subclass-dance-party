var makeJackBlackDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.$node.html('<img class= \'image\' src= assets/jackBlack.gif>');
  this.$node.addClass('image jack');
};

makeJackBlackDancer.prototype = Object.create(dancer.prototype);
makeJackBlackDancer.prototype.constructor = makeJackBlackDancer;
var oldStep = dancer.prototype.step;

makeJackBlackDancer.prototype.step = function() {
  oldStep.call(this);
};