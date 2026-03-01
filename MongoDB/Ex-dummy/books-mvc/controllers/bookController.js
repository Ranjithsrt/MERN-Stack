// import Book from "../models/Book.js";

// /* GET all books */
// export const getBooks = async (req, res) => {
//   const books = await Book.find();
//   res.json(books);
// };

// /* GET single book */
// export const getBookById = async (req, res) => {
//   const book = await Book.findById(req.params.id);
//   res.json(book);
// };

// /* CREATE book */
// export const createBook = async (req, res) => {
//   const book = await Book.create(req.body);
//   res.status(201).json(book);
// };

// /* UPDATE book */
// export const updateBook = async (req, res) => {
//   const book = await Book.findByIdAndUpdate(
//     req.params.id,
//     req.body,
//     { new: true } // updated data return
//   );
//   res.json(book);
// };

// /* DELETE book */
// export const deleteBook = async (req, res) => {
//   await Book.findByIdAndDelete(req.params.id);
//   res.json({ message: "Book deleted" });
// };


import Book from "../models/Book.js";

/* =========================
   GET all books
   ========================= */
export const getBooks = async (req, res) => {
  try {
    // MongoDB-ல இருந்து எல்லா books-யும் எடுக்கிறது
    const books = await Book.find();

    // Success response
    res.status(200).json(books);
  } catch (error) {
    // Error response
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   GET single book by ID
   ========================= */
export const getBookById = async (req, res) => {
  try {
    // ID-ஐ வைத்து book தேடுகிறது
    const book = await Book.findById(req.params.id);

    // Book இல்லைனா
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* =========================
   CREATE new book
   ========================= */
export const createBook = async (req, res) => {
  try {
    // Request body-ல வந்த data-வை வைத்து new book create
    const book = await Book.create(req.body);

    // Created success
    res.status(201).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* =========================
   UPDATE book
   ========================= */
export const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // updated book return ஆகும்
    );

    // Book இல்லைனா
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json(book);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

/* =========================
   DELETE book
   ========================= */
export const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    // Book இல்லைனா
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
