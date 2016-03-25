var fs = require('fs');
var path = require('path');
var babel = require('babel-core');
var origJs = require.extensions['.js'];

require.extensions['.js'] = function(module, fileName) {
  var output;

  // mock react-native
  if (fileName.indexOf('node_modules/react-native/Libraries/react-native/react-native.js') >= 0) {
    fileName = path.resolve('./test/mocks/react-native.js');
  }

  // skip node modules
  if (fileName.indexOf('node_modules/') >= 0) {
    return (origJs || require.extensions['.js'])(module, fileName);
  }

  // skip images
  if (fileName.indexOf('theme/images.js') >= 0) {
    fileName = path.resolve('./test/mocks/images.js');
  }

  // Transform
  var src = fs.readFileSync(fileName, 'utf8');
  output = babel.transform(src, {
    filename: fileName
  }).code;

  return module._compile(output, fileName);
};
