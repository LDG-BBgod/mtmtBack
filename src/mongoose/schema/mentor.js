const mongoose = require('mongoose')

const Mentor = new mongoose.Schema({
  contact: { type: String, default: '', required: true },
  register: { type: Date, default: Date.now, required: true },
})

module.exports = Mentor
