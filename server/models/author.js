const authorSchema = new Schema({
    name: String,
    age: Number
});

module.exports = mongoose.model('Authors', authorSchema);