
var mongoose = require('./db');


var responseSchema = mongoose.Schema({
  flavor: String,
  count: Number
});

// responseSchema.statics.findAndModify = function (query, sort, doc, options, callback) {
//   return this.collection.findAndModify(query, sort, doc, options, callback);
// };

// responseSchema.statics.increment = function (counter, callback) {
//     return this.findByIdAndUpdate(counter, { $inc: { next: 1 } }, {new: true, upsert: true, select: {next: 1}}, callback);
// };



var FlavorModel = mongoose.model('Response', responseSchema);


module.exports = FlavorModel;