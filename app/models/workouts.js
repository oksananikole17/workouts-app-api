const mongoose = require('mongoose')

const workoutsSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('Workouts', workoutsSchema)
