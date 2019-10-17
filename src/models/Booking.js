const mongoose = require('mongoose');

const BookingtSchema = new mongoose.Schema({
  date: String,
  aproved: Boolean ,
  prince: Number,
  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  spot:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
  }

});

module.exports = mongoose.model('Booking', BookingtSchema);