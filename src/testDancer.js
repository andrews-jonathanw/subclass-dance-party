var testDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('testDancer');
};

testDancer.prototype = Object.create(dancer.prototype);
testDancer.prototype.constructor = testDancer;
var oldStep = dancer.prototype.step;

testDancer.prototype.step = function() {
  oldStep.call(this);
  this.$node.animate({rotate: 360}, 3, animate );
};


/*
      opacity: '0',
      height: '1000px',
    // width: '50px'
    */