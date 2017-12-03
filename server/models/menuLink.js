const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MenuLinkSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  page: {
    type: Schema.Types.ObjectId,
    ref: 'Page',
    required: true,
  },
});

mongoose.model('MenuLink', MenuLinkSchema);
