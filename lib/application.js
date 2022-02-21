/*
 * @Author: 小方块 
 * @Date: 2022-02-21 23:34:31 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-22 00:01:40
 */

/**
 * core
*/
const http = require('http')
const url = require('url')

/**
 * helper
*/
const Router = require('./router')

class Application {
  constructor() {
    this._router = new Router()
  }
  get(path, handle) {
    this._router.get(path, handle)
  }
  listen(...args) {
    const _server = http.createServer((req, res) => {
      const _done = () => { res.end(`Can not ${req.method} ${req.url}`) }
      this._router.handle(req, res, _done)
    })
    _server.listen(...args)
  }
}

module.exports = Application