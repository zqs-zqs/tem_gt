#设置客户端连接服务器端的编码
SET NAMES UTF8;
#丢弃数据库，如果存在
DROP DATABASE IF EXISTS gt;
#创建新的数据库，设置存储编码
CREATE DATABASE gt CHARSET=UTF8;
#进入数据库
USE gt;
-- 用户
create table user(
  uid int primary key auto_increment,
  username varchar(16),
  realname varchar(8),
  upwd varchar(32),
  phone varchar(11),
  user_card varchar(18) unique,
  nickname varchar(20)
);
-- 乘车人
create table rider(
    rid int primary key auto_increment,
    rider_name varchar(8),
    rider_card varchar(18) unique,
    rider_phone varchar(11),
    rider_uid int
);
-- 地点
create table china_place(
    pid int primary key auto_increment,
    place varchar(8)
);
-- 购票记录
create table ticket(
    tid int primary key auto_increment,
    place_start varchar(10),
    place_over varchar(10),
    travel_timestart varchar(100),
    travel_timeover varchar(100),
    buying_time varchar(100),
    ticket_uid int,
    ticket_rid int
);
create table ticket_details(
    did int primary key auto_increment,
    dstart varchar(20),
    dover varchar(20),
    timestart varchar(30),
    timeover varchar(30),
    model varchar(15),
    dcount int
);
-- insert into china_place(place) 
-- values ('重庆'),('北京'),('上海'),('成都'),('广州'),('深圳'),('杭州');
INSERT INTO china_place(place) 
VALUES('重庆'),('北京'),('上海'),('成都'),('广州'),('深圳'),('杭州'); 

INSERT INTO user(username,realname,upwd,phone,user_card,nickname) 
VALUES('123456789','真名1','25f9e794323b453885f5181f1b624d0b','15046608988','500101199804164821','昵称1');

INSERT INTO rider VALUES(NULL,'乘车人1','500101199804164821',"13846478941",1),(NULL,'乘车人2','500101199811167915',"19831445641",1); 
INSERT INTO ticket VALUES(NULL,'北京','上海','2020年11月5日 23:15:59','2020年11月7日 23:15:59',"2020年10月30日",1,1);

INSERT INTO ticket_details(did,dstart,dover,timestart,timeover,model,dcount) VALUES(NULL,'北京','上海','2020年11月2日 11:15:00','2020年11月2日 18:30:00',"CD1997",253);
