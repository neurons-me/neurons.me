
The main steps for building a Neural Network are:

Define the model structure (such as number of input features)
Initialize the model's parameters
Loop:
Calculate current loss (forward propagation)
Calculate current gradient (backward propagation)
Update parameters (gradient descent)
You often build 1-3 separately and integrate them into one function we call model().

Breaking Down the Components
Input Features (x):
These are the characteristics or attributes of the input data. For an image, features could be pixel values, edges, colors, patterns, etc.Weights (𝑤):

Each feature 𝑥𝑖 has an associated weight 𝑤𝑖
​
 . The weight indicates the importance or contribution of that feature to the final prediction.
Positive weights increase the likelihood of the positive class (e.g., "cat"), while negative weights decrease it.
Bias (
𝑏
b):

The bias term helps shift the decision boundary. It acts as a threshold to help the model fit the data better.