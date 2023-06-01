module.exports = {
  publicPath: "/",
  outputDir: "dist",
  productionSourceMap: false,
  devServer: {
    host: "0.0.0.0",
    port: 8202,
    open: true,
    inline: false,
  },
  //去除生产console.log
  chainWebpack(config) {
    config.optimization.minimizer("terser").tap((args) => {
      args[0].parallel = 4;
      args[0].terserOptions.compress.warnings = true;
      args[0].terserOptions.compress.drop_debugger = true;
      args[0].terserOptions.compress.drop_console = true;
      return args;
    });
  },
};
