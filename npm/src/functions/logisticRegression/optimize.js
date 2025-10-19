//neurons.me/src/functions/logisticRegression/optimize.js
import propagate from './propagate.js';
/**
 * This function optimizes w and b by running a gradient descent algorithm
 * @param {Array} w - Weights, a 1D array of size (num_features)
 * @param {number} b - Bias, a scalar
 * @param {Array} X - Data of size (num_features, num_examples)
 * @param {Array} Y - True "label" vector (containing 0 if non-cat, 1 if cat) of size (1, num_examples)
 * @param {number} num_iterations - Number of iterations of the optimization loop
 * @param {number} learning_rate - Learning rate of the gradient descent update rule
 * @param {boolean} print_cost - True to print the cost every 100 steps
 * @returns {{params: {w: Array, b: number}, grads: {dw: Array, db: number}, costs: Array}} - Updated parameters, gradients, and cost history
 */
function optimize(w, b, X, Y, num_iterations = 100, learning_rate = 0.009, print_cost = false) {
    w = [...w];
    b = b;

    let costs = [];
    let dw, db;

    for (let i = 0; i < num_iterations; i++) {
        // Cost and gradient calculation
        const propagationResult = propagate(w, b, X, Y);
        dw = propagationResult.dw;
        db = propagationResult.db;
        const cost = propagationResult.cost;

        // Ensure dw is defined before updating parameters
        if (dw === undefined || db === undefined) {
            throw new Error(`dw or db is not defined at iteration ${i}. dw: ${dw}, db: ${db}`);
        }

        // Update rule
        w = w.map((weight, index) => weight - learning_rate * dw[index]);
        b = b - learning_rate * db;

        // Record the costs
        if (i % 100 === 0) {
            costs.push(cost);

            // Print the cost every 100 training iterations
            if (print_cost) {
                console.log(`Cost after iteration ${i}: ${cost}`);
            }
        }
    }

    const params = { w: w, b: b };
    const grads = { dw: dw, db: db };

    return { params: params, grads: grads, costs: costs };
}

export default optimize;
