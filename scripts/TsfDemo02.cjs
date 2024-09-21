
"use strict" ;







/** the TensorFlow `tf` namespace. */
/* cannot use `tfjs-node` at this pt due to loading failures */
// // Use `tfjs-node`. Note that `tfjs` is imported indirectly by `tfjs-node`.
// const tf = require('@tensorflow/tfjs-node');
const tf = require('@tensorflow/tfjs');

require('@tensorflow/tfjs-backend-webgl');

console.log(`Ev 'tf.getBackend()': `, tf.getBackend() );

// Define a simple model.
const model = tf.sequential();
model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
model.add(tf.layers.dense({units: 1, activation: 'linear'}));
model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

const xs = tf.randomNormal([100, 10]);
const ys = tf.randomNormal([100, 1]);

// Train the model.
model.fit(xs, ys, {
  epochs: 100,
  callbacks: {
    onEpochEnd: (epoch, log) => console.log(`Epoch ${epoch}: loss = ${log?.loss}`)
  }
});





