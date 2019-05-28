
/**
 * 将微信小程序接口Promise化
 * @param api
 * @example
 * promisify(wx.request)({ url: 'https://api.msmao.com' })
 * 	.then(res => {
 * 		console.log(res);
 *  })
 * 	.catch(err => {
 * 	  console.error(err);
 * 	})
 */
module.exports = (api) => (options, ...params) => 
  new Promise((resolve, reject) => 
    api(Object.assign({}, options, { success: resolve, fail: reject }), ...params)
);