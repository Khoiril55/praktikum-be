var express = require('express');
var router = express.Router();
const{createUserValidation, loginValidation}=require('../../middleware/input-validation');

router.get("/", (req, res) => {
    return res.send({
        project:'API v1 Web Service Praktikum Back-ENd' 
    });
});

var userApi = require('../../api/controller/UserController.js');
// User
router.get('/user', userApi.get);
router.get('/user/:id', userApi.getById);
router.post('/user',createUserValidation, userApi.create);
router.put('/user/:id', userApi.update);
router.delete('/user/:id', userApi.delete);
router.post('/user/login', loginValidation, userApi.login);

module.exports = router;