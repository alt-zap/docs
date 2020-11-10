/*eslint-env node */
module.exports = function (context, options) {
  return {
    name: 'webpack-config',
    configureWebpack(config, isServer, utils) {
      if (isServer) {
        return {
          externals: function(context, request, callback) {
            // Exclude bundling firebase*
            // These are instead required at runtime.
            if (/^@?(react-)?firebase(.*)/.test(request)) {
              console.log(`Excluding bundling of: ${request}`);
              return callback(null, `umd ${request}`);
            }

            callback();
          },
          output: {
            libraryTarget: 'umd'
          }
        };
      }

      return {};
    },
  };
};
