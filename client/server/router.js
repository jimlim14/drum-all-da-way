const Router = require('express');
const router = new Router();

const { getInstructors, postInstructor } = require('./controllers/controller');

router.get('/instructors', getInstructors);
router.post('/instructors', postInstructor);

module.exports = router;
