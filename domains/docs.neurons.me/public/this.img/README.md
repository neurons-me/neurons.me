<img src="https://docs.neurons.me/media/all-this/webP/this.img.webp" alt="SVG Image" width="250" height="250">

# THIS.IMG
> Designed to **standardize image data,** transforming it into a **structured format** that is readily accessible and interpretable by machine learning models.

# Getting Started:

##### **Install `this.img`:**
Open your terminal and run the following command to install the `this.me` package:

```bash
npm install this.img
```

##### **Import `this.img` in Your Project:**
In the JavaScript file where you want to use `this.img`, import the `thisImg` class.

```js
import thisImg from 'this.img';
```


# Simple Integration Example:

```javascript
// Example of processing an image using a preset
const imagePath = 'path/to/image.jpg';
// Use a high-resolution grayscale preset
thisImg(imagePath, PRESETS.highResGray256)
  .then(result => {
    console.log('Processed Image:', result);
  })
  .catch(error => {
    console.error('Error processing image:', error);
  });
```

-----

**Machine learning models** often require specific image sizes based on the model architecture and task. `this.img` includes common sizes used in machine learning, along with color options, integrated as **presets** for easy configuration.

### Common Image Sizes for Machine Learning

1. **Small Size**: Commonly used for basic models and when computational resources are limited.
   - **Size**: 32x32
   - Often used in datasets like CIFAR-10.
2. **Medium Size**: A balance between detail and computational efficiency.
   - **Size**: 64x64 or 128x128
   - Typical for intermediate complexity models.
3. **Large Size**: Used for models requiring high detail.
   - **Size**: 256x256 or 299x299
   - Used in more complex models, such as those for high-resolution image classification.

### Below is the list of available presets:

- `default64`: Standard 64x64 resolution, 3 channels (rgb) color, **'jpeg'.**
- `small32`: Small **32x32** resolution, 3 channels (rgb) color, **'jpeg'.**
- `large128`: Large **128x128** resolution, 3 channels (rgb) color, **'jpeg'.**
- `highResColor256`: High-resolution **256x256**, 3 channels (rgb) color, **'jpeg'.**
- `grayscale32`: Small **32x32** resolution, grayscale 1 color channel, **'jpeg'.**
- `grayscale64`: Standard **64x64** resolution, grayscale 1 color channel, **'jpeg'.**
- `highResGray256`: High-resolution **256x256**, 1 color channel. grayscale, **'jpeg'.**

You can use these presets directly by referencing their names when calling the `thisImg` function

### Handling Color Channels
- **RGB (Color)**: 3 channels (standard for colored images)
- **Grayscale**: 1 channel (used for reducing computational load or when color is not informative)

## this.img.browser.js
Returns an **HTMLImageElement** that can be used on a canvas.
 This function supports loading from both URLs and Blob objects.

-----

# What is All.This?

###### Modular Data Structures:

**Each module** in **[all.this](https://neurons.me/all-this)** represents a specific **datastructure**. These **classes** encapsulate the functionalities and **data specific to their domain.**

**[this.me](https://docs.neurons.me/this.me/index.html)  - [this.audio](https://docs.neurons.me/this.audio/index.html) - [this.text](https://docs.neurons.me/this.text/index.html) - [this.wallet](https://docs.neurons.me/this.wallet/index.html) - [this.img](https://docs.neurons.me/this.img/index.html) - [this.pixel](https://docs.neurons.me/this.pixel/index.html) - [be.this](https://docs.neurons.me/be.this/index.html) - [this.DOM](https://docs.neurons.me/this.DOM/index.html) - [this.env](https://docs.neurons.me/this.env/index.html) - [this.GUI](https://docs.neurons.me/this.GUI/index.html) - [this.be](https://docs.neurons.me/this.be/index.html) - [this.video](https://docs.neurons.me/this.video/index.html) - [this.dictionaries](https://docs.neurons.me/this.dictionaries/index.html)** 

#### Contribution
If you are interested in collaborating or wish to share your insights, please feel free to reach out or contribute to the project.

#### License & Policies
- **License**: MIT License.
- **Learn more** at **https://docs.neurons.me**

  [Terms](https://docs.neurons.me/terms-and-conditions) | [Privacy](https://docs.neurons.me/privacy-policy)

  <img src="https://docs.neurons.me/neurons.me.webp" alt="neurons.me logo" width="123" height="123">
