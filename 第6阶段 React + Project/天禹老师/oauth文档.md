## 1.OAuth 2.0

- OAuth 2.0 是目前最流行的授权机制，用来授权第三方应用，获取用户数据。
- 简单说，OAuth 就是一种授权机制。数据的所有者同意其他应用使用自己存储的用户信息。

- 文档： https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/ （需翻墙）
- 教程： http://www.ruanyifeng.com/blog/2019/04/github-oauth.html

## 2.Github 授权流程

- 开发流程介绍

  - 从A 网站跳转到 GitHub授权页面。
  - GitHub 要求校验用户信息，引导用户登录。
  - GitHub 询问"A 网站要求获得你的xx数据，你是否同意？"
  - 用户同意，GitHub 就会重定向到A网站对应的服务器，同时发回一个授权码。
  - A网站服务器使用授权码，向 GitHub 请求令牌。
  - GitHub 返回令牌. A网站服务器使用令牌，向 GitHub 请求用户数据。

- 应用登记

  - 一个应用要求 OAuth 授权，必须先到对方网站登记，让对方知道是谁在请求。
  - https://github.com/settings/applications/new

- Github oauth 2.0 文档
  - https://developer.github.com/apps/building-oauth-apps/authorizing-oauth-apps/

## 3.使用Github授权

#### 1.github登记应用

​	登记地址：https://github.com/settings/applications/new
<img src="https://user-gold-cdn.xitu.io/2020/7/18/1735ed614ff8cd48?w=1090&h=824&f=jpeg&s=195042" style="zoom:50%;" /> 

#### 2.获得client_id

查看地址：https://github.com/settings/developers
<img src="https://user-gold-cdn.xitu.io/2020/7/18/1735ed63412496e2?w=1638&h=842&f=jpeg&s=143681" style="zoom:33%;" />

#### 3.配置

3.1 将得到的 client_id 存到前端项目 config\oauth.js 中

```
// github申请成功后得到的client_id
const client_id = "xxxx";
// oauth验证网址
const auth_url = "https://github.com/login/oauth/authorize";

export { client_id, auth_url };
```

3.2 将得到的 client_id 、clinet_secret配置到服务器config\index.js中

```js
// github oauth
const CLIENT_ID = "xxxxxxxxxxxxxxx";
const CLIENT_SECRET = "xxxxxxxxxxxxxxx";
```

3.2 编写授权模块

1. 新增模块 pages/Login/components/Oauth

   ```js
   import React, { Component } from "react";
   import { connect } from "react-redux";
   import { loginSuccessSync } from "@redux/actions/login";
   
   @connect(null, { loginSuccessSync })
   class Oauth extends Component {
   	componentDidMount() {
   		// 获取token --> 此时服务器已经获取到github用户数据，并注册了用户，返回token
   		const token = this.props.location.search.split("=")[1];
   		// 更新redux token
   		this.props.loginSuccessSync({ token });
   		// 保存到本地
   		localStorage.setItem("user_token", token);
   		// 跳转到首页
   		this.props.history.replace("/");
   	}
   	render() {
   		return <div>权限验证中。。。</div>;
   	}
   }
   export default Oauth;
   ```

2. 点击 github 登陆，触发 oauth 授权登陆

   ```js
   <GithubOutlined className="login-icon" onClick={this.loginGithub} />;
   
   loginGithub = () => {
   	window.location.href = `${auth_url}?client_id=${client_id}&redirect_uri=${redirect_url}`;
   };
   ```

   

