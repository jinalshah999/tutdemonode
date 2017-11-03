var db=require('../dbconnection');

var users={

    
    user_login:function(user,callback){
    return  db.query('select * from user_tbl where email_id=? and password=?',[user.email_id,user.password],callback);
    },
    sign_up:function(user,callback){
        return db.query('insert into user_tbl values(?,?,?)',[user.email_id,user.password,user.mobile_no],callback);
    },
    getalluser:function(callback){
        
            return  db.query('select * from user_tbl ',callback);
            }
};

module.exports=users;