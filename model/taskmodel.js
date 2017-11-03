var db=require('../dbconnection');

var task={

    getAllTasks:function(callback){
        
      return db.query("select * from task",callback);
        
       },
       getTaskById:function(id,callback){
        
      return db.query("select * from task where Id=?",[id],callback);
        
       } ,
       getTaskByTitle:function(id,callback){
        
      return db.query("select * from task where Title=?",[id],callback);
        
       } 

};

module.exports=task;