var GrowDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

GrowDancer.prototype = Object.create(Dancer.prototype);

GrowDancer.prototype.constructor = GrowDancer;

GrowDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.grow();
};