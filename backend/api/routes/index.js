const express = require('express'),
  router = express.Router(),
  asyncMiddleware = require('express-async-handler'),
  authenticationCtrl = require('../controllers/AuthenticationController');
  sessionCtrl = require('../controllers/SessionController');
  articlesCtrl = require('../controllers/ArticlesController');
  commentsCtrl = require('../controllers/CommentsController');
  PsychoController = require('../controllers/PsychoController');// requiring the psychologist controller to obtain the method created in it
  planCtrl = require('../controllers/PlanController');
  Activity = require('../controllers/ActivityController');
  requestCtrl = require('../controllers/RequestController');
  scheduleCtrl = require('../controllers/ScheduleController');
  CVCtrl = require('../controllers/CVcontroller');

  profileCtrl = require('../controllers/ProfileController');
  listSchedCtrl = require('../controllers/ListSchedController');


//Login Routes
router.post('/login', asyncMiddleware(authenticationCtrl.checkCredentials));
router.get('/logout', asyncMiddleware(authenticationCtrl.logout));
router.post('/signup', asyncMiddleware(authenticationCtrl.createUser));
router.post('/forgot', asyncMiddleware(authenticationCtrl.resetPassword));
router.patch('/reset', asyncMiddleware(authenticationCtrl.reset));
router.post('/checkavailibilty', asyncMiddleware(authenticationCtrl.checkAvailablity)); // the route to check availabilty method
router.get('/getUsers', asyncMiddleware(authenticationCtrl.getUsers));
router.get('/getUser/:userId', asyncMiddleware(authenticationCtrl.getUser));
router.patch('/product/updatedUser/:Username', asyncMiddleware(authenticationCtrl.updateUser));
router.post('/Session', asyncMiddleware(sessionCtrl.createSession));
router.post('/article/createArticle', asyncMiddleware(articlesCtrl.createArticle));
router.post('/article/deleteArticle', asyncMiddleware(articlesCtrl.deleteArticle));
router.post('/article/saveArticle', asyncMiddleware(articlesCtrl.saveArticle));
router.get('/article/getArticle/:articleId', asyncMiddleware(articlesCtrl.getArticle));
router.get('/article/getArticles', asyncMiddleware(articlesCtrl.getArticles));
router.post('/article/addComment', asyncMiddleware(commentsCtrl.addComment));
router.get('/article/getComments/:articleId', asyncMiddleware(commentsCtrl.getComments));
router.get('/PsychoController/getPsycho', asyncMiddleware(PsychoController.getPsycho));// making route(GET) to use the method of getting psychologist
router.post('/plan/createPlan', asyncMiddleware( planCtrl.createPlan));
router.get('/plan/getPlans', asyncMiddleware( planCtrl.getPlans));
router.get('/request/getrequests/:teacherusername', asyncMiddleware(requestCtrl.getRequests));
router.get('/user/profile', asyncMiddleware(profileCtrl.getLoggedInUser));
router.get('/PsychoController/getPsycho/:usertype', asyncMiddleware(PsychoController.getPsycho));// making route(GET) to use the method of getting psychologist
router.patch('/plan/editPlan/:name', asyncMiddleware( planCtrl.updatePlan));
router.get('/plan/getPlan/:name', asyncMiddleware(planCtrl.getPlan));
router.delete('/plan/delete', asyncMiddleware( planCtrl.delete));
router.get('/Schedule/getSchedules', asyncMiddleware(scheduleCtrl.getSchedules));
router.post('/schedule/createSchedule', asyncMiddleware(scheduleCtrl.createSchedule));
router.delete('/schedule/deleteSlot/:slotId', asyncMiddleware(scheduleCtrl.deleteSlot));
router.get('/ListSchedules/getSchedList', asyncMiddleware( listSchedCtrl.getSchedList));// route to retrieve list of teachers and their schedules
router.post('/ListSchedules/addTeacherSched', asyncMiddleware(listSchedCtrl.addTeacherSched));// route to add teacher and schedule to list

// Activity Routes
router.post('/createAddAct', asyncMiddleware( Activity.createAddAct));
router.get('/getAddAct', asyncMiddleware( Activity.getAddAct));
router.patch('/updateAddAct', asyncMiddleware( Activity.updateAddAct));

router.post('/createActReg', asyncMiddleware( Activity.createActReg));
router.get('/getActReg', asyncMiddleware( Activity.getActReg));
router.patch('/updateActReg', asyncMiddleware( Activity.updateActReg));

router.post('/createInterest', asyncMiddleware( Activity.createInterest));
router.get('/getInterest', asyncMiddleware( Activity.getInterest));

router.post('/createReview', asyncMiddleware( Activity.createReview));
router.get('/getReview', asyncMiddleware( Activity.getReview));
router.patch('/updateReview', asyncMiddleware( Activity.updateReview));

router.post('/RegisterChild', asyncMiddleware(authenticationCtrl.RegisterChild));

router.get('/getCV', asyncMiddleware(CVCtrl.getCV));
router.post('/createCV', asyncMiddleware(CVCtrl.createCV));
router.delete('/deleteCV/:userid', asyncMiddleware(CVCtrl.deleteCV));


module.exports = router;
