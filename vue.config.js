module.exports = {
  publicPath: '/',
  outputDir: 'dist',
  productionSourceMap:false,
//   devtool: false,
  devServer: {
      port:8202,
    //   https: true,
      inline:false,
      proxy: {
          "/auth": {
              target: "http://geohub.real4d.xyz",
              secure: false,
              changeOrigin: true,
              pathRewrite: {
                  "^/auth": ""
              },
            // headers : {'referer': 'https://geo.datav.aliyun.com/'}

          }
          
      }

  }, 

}