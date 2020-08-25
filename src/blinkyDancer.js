// var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
//   var blinkyDancer = makeDancer(top, left, timeBetweenSteps); // DONE

//   // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
//   // so we must keep a copy of the old version of this function

//   var oldStep = blinkyDancer.step; // DONE

//   blinkyDancer.step = function() {
//     // call the old version of step at the beginning of any call to this new version of step
//     oldStep();
//     // toggle() is a jQuery method to show/hide the <span> tag.
//     // See http://api.jquery.com/category/effects/ for this and
//     // other effects you can use on a jQuery-wrapped html tag.
//     blinkyDancer.$node.toggle();
//   };

//   return blinkyDancer; // DONE
// };



//  - - - --

var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.oldStep = MakeDancer.step;// oldStep = function
};


// we plan to overwrite the step function below, but we still want the superclass step behavior to work,
// so we must keep a copy of the old version of this function
// var oldStep = blinkyDancer.step;

// blinkyDancer.step = function(timeBetweenSteps) {
//   // call the old version of step at the beginning of any call to this new version of step
//   oldStep();
//   // toggle() is a jQuery method to show/hide the <span> tag.
//   // See http://api.jquery.com/category/effects/ for this and
//   // other effects you can use on a jQuery-wrapped html tag.
//   this.$node.toggle(timeBetweenSteps);
// };

// blinkerDancer.step();

// this.step = function () {

// };
// return blinkyDancer;

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.step = function () {
  oldStep();
  this.$node.toggle();
};
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

