var express = require('express');
var router = express.Router();
var user=require('../model/usermodel');

router.post('/',function(req,res,next){

        user.sign_up(req.body,function(err,rows){

            if(err){
                res.json(err);
            }
            else{
                res.json(rows);
            }
        });
});

module.exports=router;