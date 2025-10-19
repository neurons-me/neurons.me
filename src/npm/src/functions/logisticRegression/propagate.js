//neurons.me/src/functions/logisticRegression/propagate.js
import { transpose, reshape, add, multiply, sum, subtract, dotMultiply, flatten, map, log, divide } from 'mathjs';
import sigmoid from "./sigmoid.js";

/**
 * Implement the cost function and its gradient for logistic regression propagation.
 * @param {Array} w - Weights, a 1D array of size (num_features)
 * @param {number} b - Bias, a scalar
 * @param {Array} X - Data of size (num_features, num_examples)
 * @param {Array} Y - True "label" vector (containing 0 if non-cat, 1 if cat) of size (1, num_examples)
 * @returns {{dw: Array, db: number, cost: number}} - Gradients of the weights and bias, and the cost
 */
function propagate(w, b, X, Y) {
    const m = X[0].length; // number of examples

    // Convert inputs to matrix format if they are not already
    const X_matrix = transpose(X); // Transpose X to shape (num_examples, num_features)
    const w_matrix = reshape(w, [w.length, 1]); // Ensure w is a column vector

    console.log("X_matrix:", X_matrix);
    console.log("w_matrix:", w_matrix);

    // FORWARD PROPAGATION
    // Compute Z = w^T X + b for all examples
    const Z = add(multiply(X_matrix, w_matrix), b);

    console.log("Z:", Z);

    // Compute activation A = σ(Z)
    const A = Z.map(sigmoid);

    console.log("A:", A);

    // Ensure A values are within (0, 1) range
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < A[i].length; j++) {
            if (A[i][j] <= 0) {
                A[i][j] = 1e-10;
            } else if (A[i][j] >= 1) {
                A[i][j] = 1 - 1e-10;
            }
        }
    }

    // Compute cost function
    let logA, logOneMinusA, cost;
    try {
        logA = map(A, value => log(value));
        logOneMinusA = map(subtract(1, A), value => log(value));
        cost = (-1 / m) * sum(add(dotMultiply(Y, logA), dotMultiply(subtract(1, Y), logOneMinusA)));
    } catch (err) {
        console.error("Error in computing log values or cost:", err);
        cost = NaN;
    }

    console.log("cost:", cost);

    // BACKWARD PROPAGATION
    const dZ = subtract(A, Y);

    console.log("dZ:", dZ);

    let dw;
    try {
        dw = multiply(transpose(X), dZ);
        console.log("dw before division by m:", dw);
        dw = divide(dw, m);
        console.log("dw after division by m:", dw);
    } catch (err) {
        console.error("Error in computing dw:", err);
        dw = NaN;
    }

    const db = (1 / m) * sum(dZ);

    console.log("db:", db);
    console.log("dw after flatten:", dw);

    return {
        dw: Array.isArray(dw) || dw instanceof Object ? flatten(dw) : dw,
        db: db,
        cost: cost
    };
}

export default propagate;
