const routers = [
  {
    path: '*',
    method: 'all',
    handle: (req, res) => {
      res.end(`Can not ${req.method} ${req.url}`)
    }
  }
]

module.exports = routers