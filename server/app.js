const express=require('express');
const app=express();
const mysql=require('mysql');
const bodyParse=require("body-parser");
const md5=require('md5');
const pool=mysql.createPool({
    host:"127.0.0.1",
    port:"3306",
    user:"root",
    password:"",
    database:"gt",
    connectionLimit:10
});
// 引入cros模块
const cros=require('cors');
const { connect } = require('http2');
const { Console } = require('console');
const { Server } = require('http');
// 解决跨域
app.use(cros({
    origin:['http://localhost:8080','http://127.0.0.1:8080']
}))
app.listen(3000);

app.use(bodyParse.urlencoded({
    extended:false
}));
//用户注册接口
app.post('/register',(req,res)=>{
    let realname=req.body.realname;
    let user_card=req.body.user_card;
    let phone=req.body.phone;
    console.log(realname,user_card,phone)
    let sql="select uid from user where user_card=?";
    pool.query(sql,[user_card],(err,result)=>{
        if(err) throw err;
        //如果以后不存在,则返回空数组 -- []
        //如果用户已存在，则返回只包含一个对象的数组 -- [{lid:3}]
        if(result.length==0){
            sql="INSERT user(realname,user_card,phone) VALUES(?,?,?)"
            pool.query(sql,[realname,user_card,phone],(err,result)=>{
                if(err) throw err;
                res.send({message:'注册成功',code:1});
            })
        }else{
            res.send({message:'注册失败',code:0});
        }
    })
});

//用户注册接口2
app.post('/register2',(req,res)=>{
    let username=req.body.username;
    let upwd=req.body.upwd;
    let sql="select uid from user where username=?";
    pool.query(sql,[username],(err,result)=>{
        if(err) throw err;
        //如果以后不存在,则返回空数组 -- []
        //如果用户已存在，则返回只包含一个对象的数组 -- [{lid:3}]
        if(result.length==0){
            sql="INSERT user(username,upwd) VALUES(?,MD5(?))"
            pool.query(sql,[username,upwd],(err,result)=>{
                if(err) throw err;
                res.send({message:'注册成功',code:1});
            })
        }else{
            res.send({message:'注册失败',code:0});
        }
    })
});

//添加联系人
app.post('/rider',(req,res)=>{
    let rider_name=req.body.rider_name;
    let rider_card=req.body.rider_card;
    let rider_phone=req.body.rider_phone;
    let rider_uid=req.body.rider_uid;
    console.log(rider_name,rider_card,rider_phone,rider_uid)
    let sql="select rid from rider where rider_card=? and rider_uid=?";
    pool.query(sql,[rider_card,rider_uid],(err,result)=>{
        if(err) throw err;
        //如果以后不存在,则返回空数组 -- []
        //如果用户已存在，则返回只包含一个对象的数组 -- [{lid:3}]
        if(result.length==0){
            sql="INSERT rider(rider_name,rider_card,rider_phone,rider_uid) VALUES(?,?,?,?)"
            pool.query(sql,[rider_name,rider_card,rider_phone,rider_uid],(err,result)=>{
                if(err) throw err;
                res.send({message:'添加成功',code:1});
            })
        }else{
            res.send({message:'添加失败',code:0});
        }
    })
});

//登录验证
app.post('/login',(req,res)=>{
    let uname=req.body.uname;
    let phone=req.body.uname;
    let upwd=md5(req.body.upwd);
    console.log(uname,upwd)
    let sql='select uid,username,realname,phone,user_card,nickname from user where (username=? or phone=?) and upwd=?';
    pool.query(sql,[uname,phone,upwd],(err,result)=>{
        if(err) throw err;
        console.log(result)
        if(result.length==1){
            res.send({message:'登录成功',code:1,info:result[0]})
        }else{
            res.send({message:'登录失败',code:0})
        }
    })
})

//车票
app.get('/ticket_details',(req,res)=>{
    let ticket_uid=req.query.ticket_uid;
    console.log(ticket_uid)
    let sql='select rider_name,ticket_uid,ticket_rid,travel_timestart,travel_timeover,place_start,place_over,buying_time from rider inner join ticket on ticket_rid=rid where ticket_uid=?'
    pool.query(sql,[ticket_uid],(err,result)=>{
        if(err)throw err;
        if(result.length>=1){
            res.send(result)
        }else{
            res.send({message:'无',code:0})
        }
    })
})

//乘车人
app.get('/rider',(req,res)=>{
    let rider_uid=req.query.rider_uid;
    //console.log(rider_uid)
    let sql='SELECT rid,rider_name,rider_card,rider_phone from rider WHERE rider_uid=?'
    pool.query(sql,[rider_uid],(err,result)=>{
        if(err)throw err;
        console.log(result)
        if(result.length>=1){
            res.send(result)
        }else{
            res.send({message:'无',code:0})
        }
    })
})
//获取地址
app.get('/',(req,res)=>{
    let sql='SELECT place from china_place'
    pool.query(sql,(err,result)=>{
        if(err)throw err;
        console.log(result)
        if(result.length>=1){
            res.send(result)
        }else{
            res.send({message:'无',code:0})
        }
    })
})

//修改密码
app.post('/revise',(req,res)=>{
    let username=req.body.phone
    let upwd=md5(req.body.upwd)
    // console.log(username,upwd)
    let sql='select username from user where username=?'
    pool.query(sql,[username],(err,result)=>{
        // console.log(result)
        if(result.length!=0){
            let set='update user set upwd=? where username=?'
            pool.query(set,[upwd,username],(err,results)=>{
                if(err)throw err;
                if(results.changedRows!=0){
                    res.send({code:1})
                }else{
                    res.send({code:2})
                }
            })
        }else{
            res.send({code:0})
        }
    })
})
//购票
app.post('/tickets',(req,res)=>{
    let ticket_uid=req.body.ticket_uid;
    let ticket_rid=req.body.ticket_rid;
    let travel_timestart=req.body.travel_timestart;
    let travel_timeover=req.body.travel_timeover;
    let place_start=req.body.place_start;
    let place_over=req.body.place_over;
    let buying_time=req.body.buying_time;
    console.log(ticket_uid,ticket_rid,travel_timestart,travel_timeover,place_start,place_over,buying_time)
    let sql='insert ticket(ticket_uid,ticket_rid,travel_timestart,travel_timeover,place_start,place_over,buying_time) values(?,?,?,?,?,?,?)';
    pool.query(sql,[ticket_uid,ticket_rid,travel_timestart,travel_timeover,place_start,place_over,buying_time],(err,result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    })
})

