/*
 * @Author: 小方块 
 * @Date: 2022-02-22 00:23:40 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-22 00:34:33
 */
const Layer = require('./layer')

class Route {
  constructor() {
    this._stack = []
  }
  get(args) {
    args.forEach(handle => {
      let layer = new Layer('/', handle)
      layer.method = 'get',
        this._stack.push(layer)
    });
  }
  dispatch() { }
}

module.exports = Route