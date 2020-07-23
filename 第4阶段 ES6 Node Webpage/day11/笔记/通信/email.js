const AliyunEmail = require('aliyun-email')

const aliyunEmail = new AliyunEmail('LTAI4Fg9TjfCchsM5itWnFLd','AacJYH5QjA7k9bfsRjcSfMz4eUALTD');

aliyunEmail.singleSendMail({
       AccountName: 'admin@xiaohigh.com',
       ReplyToAddress: true,
       AddressType: 1,
       ToAddress: '779498590@qq.com',
       FromAlias: 'xx',
       Subject: '注册成功',
       HtmlBody: '<h3>恭喜您注册成功 点击以下链接完成注册 <a href="http://www.xiaohigh.com?sign=jalksdjfklasjdflkaslkda&code=123141">点击</a></h3>'
}).then((err,res)=> {
    console.log(err);
    console.log(res);
});

