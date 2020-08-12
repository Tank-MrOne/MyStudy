
// 在manifest.json中也可以设置H5跨域配置
module.exports = {
	
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3002',
        changeOrigin: true,
				'pathRewrite': {
					"^/api": ''
				}
      }
    }
  }
}