var ColorDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorDancer.prototype = Object.create(Dancer.prototype);

ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.bounce();
};