/*index.js
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽                                                                                                            
--------------------------------
Build, manage and run your neural networks.
For more information, visit: https://neurons.me*/

// In neurons.me/index.js

/**
 * @module neurons
 * @description Exports the main classes of the neurons.me library.
 */

import Neuron from './src/Neuron.js';
import Layer from './src/Layer.js';
import NeuralNetwork from './src/NeuralNetwork.js';

/**
 * The main export object of neurons.me package.
 * @type {Object}
 */
const neurons = {
  Neuron,
  Layer,
  NeuralNetwork
};

export default neurons;
console.log("neurons.me loaded;")
