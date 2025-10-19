//neurons.me/src/functions/logisticRegression/runOptimization.js
import initializeWithZeros from "./initializeWithZeros.js";
import optimize from "./optimize.js";

/**
 * Run the logistic regression optimization process.
 *
 * @param {number} dim - Number of features (dimension of the feature vector).
 * @param {Array<Array<number>>} X - Input data of size (num_features, num_examples).
 * @param {Array<number>} Y - True "label" vector (containing 0 if non-cat, 1 if cat) of size (1, num_examples).
 * @param {number} num_iterations - Number of iterations of the optimization loop.
 * @param {number} learning_rate - Learning rate of the gradient descent update rule.
 * @param {boolean} print_cost - True to print the cost every 100 steps.
 * @returns {{params: {w: Array<number>, b: number}, grads: {dw: Array<number>, db: number}, costs: Array<number>}} - Updated parameters, gradients, and cost history.
 */
function logisticRegression(dim, X, Y, num_iterations = 1000, learning_rate = 0.009, print_cost = false) {
    // Initialize parameters
    const { w, b } = initializeWithZeros(dim);
    // Optimize parameters
    const { params, grads, costs } = optimize(w, b, X, Y, num_iterations, learning_rate, print_cost);
    console.log("Optimized weights:", params.w);
    console.log("Optimized bias:", params.b);
    console.log("Gradients:", grads);
    console.log("Cost history:", costs);
    return { params, grads, costs } ;
}

export default logisticRegression;
