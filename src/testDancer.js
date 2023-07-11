var testDancer = function(top, left, timeBetweenSteps) {
  dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('testDancer');
};

testDancer.prototype = Object.create(dancer.prototype);
testDancer.prototype.constructor = testDancer;
var oldStep = dancer.prototype.step;

var animate1 = function () {
  this.$node.animate({
    opacity: 0.6,
    width: "160",
    height: "110",
    backgroundColor:"#8000FF",
    color:"#fff",
    lineHeight: "75px",
    fontSize:"18px"
  }, 3000, animate2);
};

var animate2 = function () {
  this.$node.animate({
    opacity: 1,
    width: "300px",
    height: "200px",
    backgroundColor:"#CD9C9C",
    color:"#000",
    lineHeight: "150px",
    fontSize:"25px"
  }, 3000, animate1);
};


testDancer.prototype.step = function() {
  oldStep.call(this);
  animate1.call(this);

  // this.$node.animate({
  //   opacity: 0.6,
  //   width: "160",
  //   height: "110",
  //   backgroundColor:"#8000FF",
  //   color:"#fff",
  //   lineHeight: "75px",
  //   fontSize:"18px"
  // },3000,animateback);

};

/*
      opacity: '0',s
      height: '1000px',
    // width: '50px'
    */