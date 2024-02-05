const mongoose = require('mongoose')
const schema = require('./schema')

const db = mongoose.connection
const model = (() => {
  db.on('error', console.error)
  db.once('open', async () => {})

  mongoose.connect(
    `mongodb+srv://${process.env.MONGO_ID}:${process.env.MONGO_PW}@mtmt.jjpwxml.mongodb.net/mtmt`,
  )

  const models = {}
  for (const key in schema) {
    models[key] = mongoose.model(key, schema[key])
  }
  return models
})()

module.exports = model
