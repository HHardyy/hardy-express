/*
 * @Author: 小方块 
 * @Date: 2022-02-21 01:16:41 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-21 01:28:24
 */

/**
 * core
*/
const http = require('http')
const url = require('url')

/**
 * lib
*/

/**
 * helper
*/
const routers = require('./routers')

/**
 * 创建一个express应用
*/
function createApplication() {
  return {
    get(path, handle) {
      routers.push({
        path,
        method: 'get',
        handle
      })
    },
    listen(...args) {
      const _server = http.createServer((req, res) => {
        let { pathname } = url.parse(req.url, true)
        let reqMethod = req.method.toLowerCase()

        for (let i = 0; i < routers.length; i++) {
          let { path, method, handle } = routers[i]
          if (path === pathname && reqMethod === method) {
            return handle(req, res)
          }
        }
        return routers[0].handle(req, res)
      })
      _server.listen(...args)
    }
  }
}

module.exports = createApplication