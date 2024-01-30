const { Mentor } = require('../mongoose/model')

const mentorCreate = async (req, res) => {
  const resData = {
    err: false,
    msg: {},
  }

  try {
    const { contact } = req.body
    const newMentor = await Mentor({
      contact,
    })
    await newMentor.save()
  } catch {
    resData.err = true
  }
  res.send(resData)
}

module.exports = {
  mentorCreate,
}
