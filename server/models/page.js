const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PageSchema = new Schema({
  refTitle: {
    type: String,
    unique: true,
    required: true,
    dropDups: true,
  },
  title: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    require: true,
  },
  isHome: {
    type: Boolean,
    default: false,
  },
});

mongoose.model('Page', PageSchema);
