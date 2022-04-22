const Router = require('express');
const router = new Router();

const { getInstructors, postInstructor, getAppointments, postAppointment } = require('./controllers/controller');

router.get('/instructors', getInstructors);
router.post('/instructors', postInstructor);

router.get('/appointments', getAppointments);
router.post('/appointments', postAppointment);

module.exports = router;
