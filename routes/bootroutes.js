const express = require("express");
const router = express.Router();
const Book = require("../model/Book");
const booKController = require("../controllers/bootcontroller");

router.get("/api/items", booksController.getAllBooks);
router.post("/api/items", booksController.addBook);
router.get("/api/items/:id", booksController.getById);
router.put("/api/items/:id", booksController.updateBook);
router.delete("/api/items/:id", booksController.deleteBook);

module.exports = router;