/**
 * Created by Administrator on 2014/11/25.
 */
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'spean90@gmail.com',
        pass: 'cqmyg12345'
    }
});
transporter.sendMail({
    from: 'spean90@gmail.com',
    to: 'huangsiping1990@163.com',
    subject: '来自向日葵的问候',
    text: '您好，该进贡了！谢谢222'
});