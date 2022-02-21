/*
 * @Author: 小方块 
 * @Date: 2022-02-21 23:48:14 
 * @Last Modified by: 小方块
 * @Last Modified time: 2022-02-21 23:49:18
 */
const Application = require('./application')

const express = () => {
  return new Application()
}

module.exports = express