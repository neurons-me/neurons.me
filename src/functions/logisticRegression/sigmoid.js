//neurons.me/src/functions/logisticRegression/sigmoid.js
//The sigmoid function is defined as σ(x)=1+e−x1​.
//The output of the sigmoid function is always between 0 and 1
/**
 * The sigmoid function is defined as σ(x)=1/(1+e^(-x)).
 * The output of the sigmoid function is always between 0 and 1.
 * @param {number|Array} z - Input value or array of values.
 * @returns {number|Array} - Sigmoid of the input.
 */
function sigmoid(z) {
    // Compute the sigmoid of z
    // z can be a single value or an array of values
    if (Array.isArray(z)) {
        return z.map(val => 1 / (1 + Math.exp(-val)));
    } else {
        // If z is a single value
        return 1 / (1 + Math.exp(-z));
    }
}

// Example usage:
console.log(sigmoid(0));        // 0.5
console.log(sigmoid(2));        // ~0.8808
console.log(sigmoid(-2));       // ~0.1192
console.log(sigmoid([0, 2, -2])); // [0.5, ~0.8808, ~0.1192]

export default sigmoid;