const express = require('express')
const cors = require('cors')

const mentorRouter = require('./routers/mentor')
const contactMailRouter = require('./routers/contactMail')

const app = express()
const PORT = 2000
const corsOptions = {
  origin: '*',
}

app.use(express.json())
app.use(cors(corsOptions))

app.use('/mentor', mentorRouter)
app.use('/contactMail', contactMailRouter)

app.use((err, req, res, next) => {
  res.statusCode = err.statusCode || 500
  res.send(err.message)
})

app.listen(PORT, () => {
  console.log(`PORT = ${PORT}`)
})
