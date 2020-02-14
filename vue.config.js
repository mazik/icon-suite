module.exports = {
  pluginOptions: {
    electronBuilder: {
      chainWebpackRendererProcess: config => {
        config.plugin("html").tap(args => {
          args[0].title = "Icon Suite";
          return args;
        });
      },
      nodeIntegration: true
    }
  }
};
