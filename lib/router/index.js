/*
 * @Author: 小方块 
 * @Date: 2022-02-21 23:56:56 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-22 00:36:10
 */
const url = require('url')

const Layer = require('./layer')
const Route = require('./route')

class Router {
  constructor() {
    this._stack = []
  }
  route(path) {
    let route = new Route()
    let layer = new Layer(path, route.dispatch.bind(route))
    layer.route = route
    this._stack.push(layer)
    return route
  }
  get(path, ...args) {
    let route = this.route(path)
    route.get(args)
  }
  handle(req, res, done) {
    const { pathname } = url.parse(req.url, true)
    const reqMethod = req.method.toLowerCase()

    for (let i = 0; i < this._stack.length; i++) {
      let { path, method, handle } = this._stack[i]
      if (path === pathname && reqMethod === method) {
        return handle(req, res)
      }
    }
    return done()
  }
}

module.exports = Router
