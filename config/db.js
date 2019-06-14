const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db)

    console.log(`MongoDB connected...`)
  } catch(err) {
    console.error(err.message)
    // EXIT PROCESS WITH FAILURE
    process.exit(1)
  }
}

module.export = connectDB