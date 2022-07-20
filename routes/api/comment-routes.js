const router = require('express').Router();
const {
    addComment,
    removeComment,
    addReply,
    removeReply
  } = require('../../controllers/comment-controller');


// /api/comments/<pizzaId>
router.route('/:pizzaId').post(addComment);

// /api/comments/<pizzaId>/<commentId>
// put route updates existing comment with replies
router
  .route('/:pizzaId/:commentId')
  .put(addReply)
  .delete(removeComment)

// delete
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;