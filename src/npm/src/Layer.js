/*Inside src/Layer.js
ⓝⓔⓤⓡⓞⓝⓢ.ⓜⓔ
🆂🆄🅸🅶🅽  */

/**
 * Class representing a layer of neurons.
 */
class Layer {
    /**
     * Create a layer.
     */
    constructor() {
      this.neurons = [];
    }
  
    /**
     * Add a neuron to the layer.
     * @param {Neuron} neuron - The neuron to add.
     */
    addNeuron(neuron) {
      this.neurons.push(neuron);
    }
  
    /**
     * Remove a neuron from the layer.
     * @param {Neuron} neuron - The neuron to remove.
     */
    removeNeuron(neuron) {
      const index = this.neurons.indexOf(neuron);
      if (index > -1) {
        this.neurons.splice(index, 1);
      }
    }
  
    /**
     * Get all neurons in the layer.
     * @return {Neuron[]} An array of neurons.
     */
    getNeurons() {
      return this.neurons;
    }
  }
  
  export default Layer;
  