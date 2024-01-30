const { ContactMail } = require('../mongoose/model')

const contactMailCreate = async (req, res) => {
  const resData = {
    err: false,
    msg: {},
  }

  try {
    const { name, phone, mail, question } = req.body
    const newContactMail = await ContactMail({
      name,
      phone,
      mail,
      question,
    })
    await newContactMail.save()
  } catch {
    resData.err = true
  }
  res.send(resData)
}

module.exports = {
  contactMailCreate,
}
