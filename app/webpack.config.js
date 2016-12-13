var webpack = require('webpack')

module.exports = {
  entry:  ['./index.js', './getData.js', './getData2.js', './getClock.js'],
   output: {
     filename: 'bundle.js'
   },
  module: {
    loaders: 
        [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            { test: /\.json$/, loader: "json-loader" }
        ]
  },
   resolve: {
    extensions: ['', '.js', '.css', '.json']
  }
};
