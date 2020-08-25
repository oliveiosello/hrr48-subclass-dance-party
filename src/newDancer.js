var NewDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

NewDancer.prototype = Object.create(Dancer.prototype);

NewDancer.prototype.constructor = NewDancer;

NewDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  // this.$node.WHAT DO WE WANT;
};