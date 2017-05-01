const { json } = require('micro')
const chalk = require('chalk')
const jsome = require('jsome')

let requestCounter = 0
function visualize (fn, log = 'dev') {
  return async function logRequest (req, res) {
    const ret = await fn(req, res)
    if (log !== 'dev') {
      return ret
    }

    const start = new Date()
    const requestIndex = ++requestCounter
    const dateString = `${chalk.grey(start.toLocaleTimeString())}`
    console.log(`> #${requestIndex} ${chalk.bold(req.method)} ${req.url}\t\t${dateString}`)

    if (req.method !== 'GET' &&
      req.headers['content-type'] === 'application/json') {
      try {
        const parsedJson = await json(req)
        jsome(parsedJson)
      } catch (err) {
        console.log(`JSON body could not be parsed: ${err.message}`)
      }
    }

    res.once('finish', () => {
      const delta = new Date() - start
      const time = delta < 10000 ? `${delta}ms` : `${Math.round(delta / 1000)}s`
      const endDateString = `${chalk.grey(new Date().toLocaleTimeString())}`

      console.log(`< #${requestIndex} ${chalk.bold(res.statusCode)} [+${time}]\t${endDateString}`)

      if (res._logBody) {
        jsome(res._logBody)
      }
    })

    res._logBody = ret
    return res._logBody
  }
}

module.exports = visualize
