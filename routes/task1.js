var express = require('express');
var router = express.Router();
var Task = require('../model/taskmodel');

router.get('/:title?',function(req,res,next){

    if(req.params.title)
    {
    Task.getTaskByTitle(req.params.title,function(err,rows){

        if(err){

                res.json(err);
        }
        else{

                res.json(rows);
        }
    });
    }
});

module.exports=router;