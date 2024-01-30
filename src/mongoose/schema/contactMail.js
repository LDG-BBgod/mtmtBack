const mongoose = require('mongoose')

const contactMail = new mongoose.Schema({
  name: { type: String, default: '', required: true },
  phone: { type: String, default: '', required: true },
  mail: { type: String, default: '', required: true },
  question: { type: String, default: '', required: true },
  register: { type: Date, default: Date.now, required: true },
})

module.exports = contactMail
