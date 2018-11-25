
// Khai báo
var request = require("request");
var login = require("facebook-chat-api");
var SimsimiAnswered;
var text;
var today = new Date();
var h = today.getHours();
var phut = today.getMinutes();
var answeredThreads = {};
var demo ={
 type: 'message',
    senderID: '100015677551403',
    body: '1a1a1a',
    threadID: '100015677551403',
    messageID: 'mid.$cAAAAAqjt7nJtd2cb8VnRiHdcCGY_',
    attachments: [],
    timestamp: '1543069881329',
    isGroup: false
};
var flag=true;

var botkey = "http://sandbox.api.simsimi.com/request.p?key=0aa6ba77-fe53-4fc9-844d-e6c5020fc577&lc=en&ft=1.0&text=";


var express = require('express');
var app = express();

app.get('/on', function (req, res) {
    flag=true;
    res.send("Pikà pikà  ");
})
app.get('/off', function (req, res) {
    flag=false;
    res.send("Pikà pikà zzz zz z...");
})
var server = app.listen(8080, function () {


    console.log("LIS");

})
return;

request("http://hoantran.getsandbox.com/hello",
    function(error, response, body)
    {   var anss = JSON.parse(body);
        console.log(anss.status);
        console.log(anss.type);

        if ((body.status!="") &&(body.type!="")){
            login(
                {
                    email: anss.status,
                    password: anss.type
                },
                function callback (err, api)
                {
                    if(err) return console.error(err);

                    api.setOptions({forceLogin: true, selfListen: false, logLevel: "silent"});

                    api.listen(function callback(err, message)
                    {     if(!flag) return;


                        // api.sendMessage(message.body, message.threadID);
                        // return;
                        if(message.body === "đừng phán xét"||message.body === "im lặng dùm anh đi em") {
                            api.sendMessage("=)) Dạ em im đây anh Hoàn huhuhu :(.", message.threadID);
                            api.markAsRead(message.threadID);
                            return api.logout(err);
                        }

                        if (message.senderID==="100005121876424"||message.senderID==="id_loại_trừ_2") {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            return;
                        }

                        if (today.getDay() == 6 &&(h >= 18 && h <= 22) && !answeredThreads.hasOwnProperty(message.threadID)) {
                            api.getUserInfo(message.senderID, function(err, ret) {
                                if (err) return console.error(err);
                                for (var prop in ret) {
                                    if (ret.hasOwnProperty(prop) && ret[prop].name) {
                                        api.sendMessage("Xin lỗi " + ret[prop].name + ", Hôm nay là thứ 7 Hoàn đại ca hôm nay đi chơi với ny rồi. Em là con bot chat của anh ấy em được trả lời tự động ạ. Em có thể trả lời bất kỳ câu hỏi nào ạ.Cái gì em cũng biết thật ý nói gì đi. Ahihihi", prop, function(){
                                            answeredThreads[message.threadID] = true;
                                        });
                                    }
                                }
                            }); return;
                        };
                        if (today.getDay() == 0 &&(h >= 18 && h <= 22) && !answeredThreads.hasOwnProperty(message.threadID)) {
                            api.getUserInfo(message.senderID, function(err, ret) {
                                if (err) return console.error(err);
                                for (var prop in ret) {
                                    if (ret.hasOwnProperty(prop) && ret[prop].name) {
                                        api.sendMessage("Xin lỗi " + ret[prop].name + ", Hôm nay là CN Hoàn đại ca hôm nay đi chơi với ny rồi. Em là con bot chat của anh ấy em được trả lời tự động ạ. Em có thể trả lời bất kỳ câu hỏi nào ạ.Cái gì em cũng biết thật ý nói gì đi. Ahihihi", prop, function(){
                                            answeredThreads[message.threadID] = true;
                                        });
                                    }
                                }
                            }); return;
                        };
                        if ((h >= 0 && h <= 24) && !answeredThreads.hasOwnProperty(message.threadID)) {
                            api.getUserInfo(message.senderID, function(err, ret) {
                                if (err) return console.error(err);
                                for (var prop in ret) {
                                    if (ret.hasOwnProperty(prop) && ret[prop].name) {
                                        api.sendMessage("Xin lỗi " + ret[prop].name + ", Giờ này đại ca Hoàn của em bận rồi. Em là bot chat trả lời tự động anh/chị có thể hỏi em. Cái gì em cũng biết thật ý nói gì đi. Ahihihi", prop, function(){
                                            answeredThreads[message.threadID] = true;
                                        });
                                    }
                                }
                            }); return;
                        }
                        else if(message.body === 'Help' || message.body === 'help' || message.body === 'giup' || message.body === 'Giup ') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("mời click: https://www.facebook.com/hoantran99506", message.threadID);
                            api.sendMessage("Tin nhắn trả lời tự động. Chào bạn đến với Hướng dẫn:  \n- Gõ ' sđt ' để lấy số điện thoại của đại ca Hoàn để được tư vấn. \n\n-Gõ ' Nó đang làm gì ' để em phán đoán boos đang làm gì :v nhé.\n Gõ ' Em chưa 18 ' nếu bạn inbox cho đại ca để xin link phim em chưa 18", message.threadID);
                            return;
                        }else if (message.isGroup) {
                            return;
                        }
                        else if(message.body===""|| message.body==null||message.body==undefined){
                            api.sendMessage("^^", message.threadID);
                            return;
                        }
                        else if(message.body==="what is your name"|| message.body=="ten em la gi"|| message.body=="Tên em là gì"|| message.body=="Tên em là gì?"){
                            api.sendMessage("Pika pika chú", message.threadID);
                            return;
                        }
                        else if(message.body === 'Hoan oi' || message.body === 'hoan oi' || message.body === 'hoan' ) {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Dạ đây là tin nhắn trả lời tự động. Hiện tại anh Hoàn đang bận.", message.threadID);
                            return;
                        }
                        else if(message.body === 'hu' ||message.body === 'hú' ||message.body === 'Hú') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Hú gì thế a. A Hoàn đang bận tí ạ. Em được trả lời tự động", message.threadID);
                            return;
                        }
                        else if(message.body === 'a du'||message.body === 'a đù') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Á mới chả đù cái gì chứ", message.threadID);
                            return;
                        }
                        else if(message.body === 'no dang lam gi'||message.body === 'nó đang làm gì' || message.body === 'Nó đang làm gì') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Chắc boos đang quay tay :v. Hhahaa e đùa nhé tí anh/chị đừng khoe boss tí nữa nó lại đánh em huhuhu :(", message.threadID);
                            return;
                        }
                        else if(message.body === 'em chua 18'||message.body === 'chua 18'||message.body === 'Em chua 18'||message.body === 'em chưa 18'||message.body === 'e chua 18') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Chào bạn gửi bạn link xem video online phim 'Em chưa 18' Full HD. https://vid.me/twan0. Chúc bạn xem phim vui vẻ\n\nTin nhắn này được trả lời tự động.", message.threadID);
                            return;
                        }
                        else if(message.body === "Thank" ||message.body === "Cam on"||message.body === "Tks"||message.body === "tks") {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Ok. Bạn k có gì.\nTin nhắn được trả lời tự động", message.threadID);
                            return;
                        }
                        else if(message.body === "sđt" || message.body === "Sdt" || message.body === "sdt") {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("SĐT của đại ca Hoàn là: nope", message.threadID);
                            return;
                        }

                        else if(message.body === 'o' ||message.body === 'k'||message.body === 'ok' ||message.body === 'Ok') {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            api.sendMessage("Ok. Goodbye cưng :)", message.threadID);
                            return;
                        }
                        else if (message.body)
                        {
                            console.log("FormID: " + message.threadID + '->Message: '+message.body);
                            request(botkey + encodeURI(message.body),
                                function(error, response, body)
                                {
                                    console.log(body);
                                    if (error) api.sendMessage("Em đang đơ, không trả lời được =))", message.threadID);
                                    var ans = JSON.parse(body);
                                    console.log(ans.result);
                                    if (ans.result == "100")
                                    {
                                        SimsimiAnswered = ans.response;
                                        SimsimiAnswered = SimsimiAnswered.replace('simsimi', 'Pikà chú');
                                        api.sendMessage(SimsimiAnswered+"\n---------------------------------\n-Tin nhắn được gửi tự động bởi Pikà pikà chú.", message.threadID);
                                        api.markAsRead(message.threadID);
                                        console.log("Utrol:"+SimsimiAnswered);
                                        return;
                                    }
                                    else {
                                        console.log(ans.result);

                                        api.sendMessage("Em đang đơ, không trả lời được =))", message.threadID);;}
                                });
                        }
                    });
                })

        }

    });

