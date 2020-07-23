## HTTP 请求报文
请求报文分为 4 个部分
* 请求行
* 请求头
* 空行
* 请求体
```
请求行
    GET https://www.baidu.com/ HTTP/1.1    
请求头             
    Host: www.baidu.com                     主机名/域名/IP
    Connection: keep-alive                  连接设置            keep-alive 保持活跃  close 关闭
    Pragma: no-cache
    Cache-Control: no-cache                 缓存设置 no-cache 不缓存数据
    Upgrade-Insecure-Requests: 1            升级不安全请求  客户端支持发送 HTTPS 请求
    User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36                   用户代理 告知服务器端客户端的身份
    Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9              接受的类型   q 喜好系数  吃(0.5)  睡觉(0.6)  玩游戏(0.9)  敲代码(1)
    Sec-Fetch-Site: none                    暴露当前网页与目标服务器的关系
    Sec-Fetch-Mode: navigate                暴露请求的方式
    Sec-Fetch-User: ?1                      暴露是否为用户的行为请求
    Sec-Fetch-Dest: document                暴露目标服务资源的类型
    Accept-Encoding: gzip, deflate, br      接受的压缩方式
    Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7       接受的语言
    Cookie: BD_UPN=12314753; PSTM=1586223611;  Cookie 小甜饼
空行

请求体

```

### 请求行
GET https://www.baidu.com/ HTTP/1.1

包括三部分
* GET    请求方式 POST PUT DELETE PATCH
* URL    https://www.baidu.com:8000/html/index.html?a=100&b=200&c=300#logo
         协议     域名/IP地址   端口 路径(pathname)  查询字符串(querystring)
* 协议版本号  1.1    


####  URL
https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1
协议      域名        路径          查询字符串


### 请求头
格式:
 
头的名字: 头的值

### POST 请求报文
```
POST https://processon.com/login HTTP/1.1
Host: processon.com
Connection: keep-alive
Content-Length: 70                              指的是请求的长度
Cache-Control: max-age=0
Upgrade-Insecure-Requests: 1
Origin: https://processon.com
Content-Type: application/x-www-form-urlencoded     请求体的格式
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.92 Safari/537.36
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
Sec-Fetch-Site: same-origin
Sec-Fetch-Mode: navigate
Sec-Fetch-User: ?1
Sec-Fetch-Dest: document
Referer: https://processon.com/login            Referer 发起请求的网页 URL(防盗链)
Accept-Encoding: gzip, deflate, br
Accept-Language: zh-CN,zh;q=0.9,en;q=0.8,la;q=0.7
Cookie: _ga=GA1.2.1408876927.1586330901; JSESSIONID=9913BF661A0E1DE458BFD38B834BF818.jvm1; _gid=GA1.2.712895114.1588647686; _gat=1; zg_did=%7B%22did%22%3A%20%2217158b09a86467-09e4122bd45197-b383f66-100200-17158b09a8739d%22%7D; zg_3f37ba50e54f4374b9af5be6d12b208f=%7B%22sid%22%3A%201588647686354%2C%22updated%22%3A%201588647698681%2C%22info%22%3A%201588647686367%2C%22superProperty%22%3A%20%22%7B%7D%22%2C%22platform%22%3A%20%22%7B%7D%22%2C%22utm%22%3A%20%22%7B%7D%22%2C%22referrerDomain%22%3A%20%22%22%2C%22cuid%22%3A%20%225909d03fe4b001d6b2afdfde%22%2C%22zs%22%3A%200%2C%22sc%22%3A%200%2C%22firstScreen%22%3A%201588647686354%7D

login_email=779498590%40qq.com&login_password=4XfLJkDAfm%21MKkB%21FHgk    请求体
```

### 响应报文
响应报文的结构
* 响应行
* 响应头
* 空行
* 响应体

```
HTTP/1.1 200 OK
Bdpagetype: 1
Bdqid: 0xc1386d9500087317
Cache-Control: private
Connection: keep-alive
Content-Type: text/html;charset=utf-8
Date: Tue, 05 May 2020 03:15:17 GMT
Expires: Tue, 05 May 2020 03:15:04 GMT
Server: BWS/1.1
Set-Cookie: BDSVRTM=0; path=/
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=31356_1469_21126_31428_31341_31464_30823_26350_31164; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800
Traceid: 1588648517269869953013922998734733996823
X-Ua-Compatible: IE=Edge,chrome=1
Content-Length: 229001

<!DOCTYPE html><!--STATUS OK--><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="always" name="referrer"><meta name="theme-color" content="#2932e1"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><link rel="search" type="application/opensearchdescription+xml" href="/content-search.xml" title="百度搜索" /><link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg"><link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="//dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/><link rel="dns-prefetch" href="//sp0.baidu.com"/><link rel="dns-prefetch" href="//sp1.baidu.com"/><link rel="dns-prefetch" href="//sp2.baidu.com"/><title>百度一下，你就知道</title>
    <script data-compress=strip>
        function h(obj){
            obj.style.behavior='url(#default#homepage)';
            var a = obj.setHomePage('//www.baidu.com/');
        }
    </script>
    <script>
        _manCard = {
            asynJs : [],
            asynLoad : function(id){
                _manCard.asynJs.push(id);
            }
        };
        window._sp_async = 1;

    </script>
```

#### 响应行
HTTP/1.1 200 OK

* HTTP 协议版本
* 200  响应状态码
  * 1xx 临时响应
  * 2xx 成功
  * 3xx 重定向
  * 4xx 客户端错误
  * 5xx 服务器错误
* OK   响应字符串. 响应状态码一般都与响应状态码关联

#### 响应头
响应头可以比作是内容的说明书

格式:   

头名: 头值

```
money: 2000
Bdpagetype: 1
Bdqid: 0xc1386d9500087317
Cache-Control: private                      缓存设置  private 私有  public
Connection: keep-alive                      连接设置  保持连接
Content-Type: text/html;charset=utf-8       响应体的内容类型
Date: Tue, 05 May 2020 03:15:17 GMT         响应时间
Expires: Tue, 05 May 2020 03:15:04 GMT      过期时间
Server: BWS/1.1                             服务实现用到的技术  Aws
Set-Cookie: BDSVRTM=0; path=/               设置 cookie 的
Set-Cookie: BD_HOME=1; path=/
Set-Cookie: H_PS_PSSID=31356_1469_21126_31428_31341_31464_30823_26350_31164; path=/; domain=.baidu.com
Strict-Transport-Security: max-age=172800    严格传输安全  要求客户端需要使用安全的方式来请求(HTTPS)
Traceid: 1588648517269869953013922998734733996823   ID 编号
X-Ua-Compatible: IE=Edge,chrome=1           要求IE浏览器使用最新的引擎解析网页
Content-Length: 229001                      响应体的内容长度
```
响应头的内容是可以自定义的.
  
#### 响应体
响应体的内容是可以自定义的.
* 普通字符串 123456789
* HTML 代码
* CSS 代码   
* JS 代码
* 图片 
* JSON  `{"name":"atguigu","age":10}`

```
<!DOCTYPE html><!--STATUS OK--><html><head><meta http-equiv="Content-Type" content="text/html;charset=utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"><meta content="always" name="referrer"><meta name="theme-color" content="#2932e1"><link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" /><link rel="search" type="application/opensearchdescription+xml" href="/content-search.xml" title="百度搜索" /><link rel="icon" sizes="any" mask href="//www.baidu.com/img/baidu_85beaf5496f291521eb75ba38eacbd87.svg"><link rel="dns-prefetch" href="//dss0.bdstatic.com"/><link rel="dns-prefetch" href="//dss1.bdstatic.com"/><link rel="dns-prefetch" href="//ss1.bdstatic.com"/><link rel="dns-prefetch" href="//sp0.baidu.com"/><link rel="dns-prefetch" href="//sp1.baidu.com"/><link rel="dns-prefetch" href="//sp2.baidu.com"/><title>百度一下，你就知道</title>
    <script data-compress=strip>
        function h(obj){
            obj.style.behavior='url(#default#homepage)';
            var a = obj.setHomePage('//www.baidu.com/');
        }
    </script>
    <script>
        _manCard = {
            asynJs : [],
            asynLoad : function(id){
                _manCard.asynJs.push(id);
            }
        };
        window._sp_async = 1;

    </script>
```

