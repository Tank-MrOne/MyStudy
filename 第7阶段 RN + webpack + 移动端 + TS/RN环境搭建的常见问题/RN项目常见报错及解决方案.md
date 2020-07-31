# RN问题汇总

### 1.无法启动虚拟机

<img src="https://user-gold-cdn.xitu.io/2020/7/22/17373707840adf52?w=798&amp;h=634&amp;f=jpeg&amp;s=28208" style="zoom: 50%;" /> 

```
报错原因：主板虚拟化开关处于关闭状态
解决办法：查询电脑型号，去主板设置里打开虚拟化支持
```

------

### 2.虚拟机安装失败

<img src="https://user-gold-cdn.xitu.io/2020/7/22/17373729fd9bb8e1?w=784&amp;h=580&amp;f=png&amp;s=49612" alt="0E0BY77IG_OQ52UUO9Q$ZTA.png" style="zoom:50%;" /> 

```
报错原因：AMD处理器，无法安装英特尔虚拟化插件
解决办法：不使用AndroidStudio的模拟器，用Genymotion模拟器
```

------

### 3.启动项目报错，如下：

![](https://user-gold-cdn.xitu.io/2020/7/22/173737a1a913ba9f?w=1232&h=255&f=jpeg&s=100594)

```
报错原因：所处网络环境问题，无法下载gradle-6.2-all.zip依赖包（注意第一行的报错提示）
解决办法：本地加载gradle-6.2-all.zip，具体步骤如下：
		第一步：去课件中找到gradle-6.2-all.zip，放入：xxx\android\gradle\wrapper中
		第二步：打开xxxx\android\gradle\wrapper\gradle-wrapper.properties
		第三步：找到distributionUrl=xxxxx，改为：distributionUrl=gradle-6.2-all.zip
		第四步：重新执行yarn android，问题解决
备注：不要出现多余空格，不要写错文件名
```

------

### 4.报错或无尽的等待..... 

<img src="https://user-gold-cdn.xitu.io/2020/7/22/1737388cadb3ba5e?w=1945&amp;h=1027&amp;f=png&amp;s=122327" alt="12123.png" style="zoom: 33%;" /> 

<img src="https://user-gold-cdn.xitu.io/2020/7/22/1737382cd09347d9?w=1165&amp;h=639&amp;f=png&amp;s=184971" alt="微信截图_20200722063325.png" style="zoom:50%;" /> 

```
报错原因：所处网络环境问题，无法下载jar包
解决办法：使用阿里国内镜像地址，具体步骤如下：
		第一步：打开xxx\android\build.gradle文件
		第二步：做如下修改：
            buildscript {
                ext {
                    buildToolsVersion = "29.0.2"
                    minSdkVersion = 16
                    compileSdkVersion = 29
                    targetSdkVersion = 29
                }
                repositories {
                    maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/' }
                    maven{ url 'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
                    google()
                    jcenter()
                }
                dependencies {
                    classpath("com.android.tools.build:gradle:3.5.3")
                    // NOTE: Do not place your application dependencies here; they belong
                    // in the individual module build.gradle files
                }
            }

            allprojects {
                repositories {
                    maven{ url 'http://maven.aliyun.com/nexus/content/groups/public/'}
                    maven{ url 'http://maven.aliyun.com/nexus/content/repositories/jcenter'}
                    mavenLocal()
                    maven {
                        // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
                        url("$rootDir/../node_modules/react-native/android")
                    }
                    maven {
                        // Android JSC is installed from npm
                        url("$rootDir/../node_modules/jsc-android/dist")
                    }

                    google()
                    jcenter()
                    maven { url 'https://www.jitpack.io' }
                }
            }
            task clean(type: Delete) {
                delete rootProject.buildDir
            }
第二步：重新yarn android
```

------

### 5.中文路径导致解压包失败

<img src="https://user-gold-cdn.xitu.io/2020/7/22/173738c7c56b1c33?w=2741&amp;h=1230&amp;f=png&amp;s=437458" alt="345.png" style="zoom: 33%;" /> 

```
报错原因：中文路径导致解压失败
解决办法：将项目放入非中文目录下启动
```

------

### 6.yarn环境错误

<img src="https://user-gold-cdn.xitu.io/2020/7/22/173738ed9352ecf0?w=1277&amp;h=1283&amp;f=png&amp;s=127696" alt="d9767ac6bc57bffad60dd5d84a8c5f0.png" style="zoom:33%;" /> 

```
报错原因：yarn环境问题
解决办法：
	第一步：卸载yarn：npm remove yarn -g
	第二步：安装yarn：npm i yarn -g
```

