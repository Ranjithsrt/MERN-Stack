import mongoose from 'mongoose';

const BookSchema = new mongoose.Schema({
    bookname: { type: String, required: true },
    categoryname: { type: String, required: true },

});

// db name 'Book'
// final model name 'Book' and mongoose will create collection name 'books' in db
const BookModels =  mongoose.models.Book || mongoose.model('Book', BookSchema);

export default BookModels

// export default mongoose.models.Book || mongoose.model("Book", BookSchema);

