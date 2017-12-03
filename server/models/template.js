const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TemplateSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  html: {
    type: String,
    required: true,
  },
});

mongoose.model('Template', TemplateSchema);
