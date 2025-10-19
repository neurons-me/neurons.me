//neurons.me/src/functions/logisticRegression/example.js
import runOptimization from './runOptimization.js';

// Example data
const X = [
  [1.0, 2.0],
  [3.0, 4.0]
];
const Y = [1, 0];
const dim = 2;

// Run optimization
const { params, grads, costs } = runOptimization(dim, X, Y, 1000, 0.009, true);

console.log("Optimized weights:", params.w);
console.log("Optimized bias:", params.b);
console.log("Gradients:", grads);
console.log("Cost history:", costs);
