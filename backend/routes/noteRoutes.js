const express = require('express');
const {
  getNotes,
  createNote,
  getNoteById,
  updateNote,
  deleteNote,
} = require('../controller/noteController');
const {protect} = require('../middlewares/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getNotes);
router.route('/create').post(protect, createNote);
router
  .route('/:id')
  .get(getNoteById)
  .delete(protect, deleteNote)
  .put(protect, updateNote);

// router.route('/:id').get().put().delete();

module.exports = router;
