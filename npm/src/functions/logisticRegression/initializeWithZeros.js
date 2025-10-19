//neurons.me/src/functions/logisticRegression/initializeWithZeros.js
/**
 * @function initializeWithZeros
 * @description Creates a vector of zeros of length 'dim' for weights and initializes bias to 0.
 * @param {number} dim - Size of the weight vector.
 * @returns {{w: number[], b: number}} An object containing the weight vector 'w' and the bias 'b'.
 */
function initializeWithZeros(dim) {
    // Initialize weights as an array of zeros with length 'dim'
    console.log("initiateWithZeros dim:", dim); 
    let w = Array(dim).fill(0);
    // Initialize bias as a scalar 0
    let b = 0.0;
    return { w: w, b: b };
}

export default initializeWithZeros;

