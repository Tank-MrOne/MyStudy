(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        //引入模块
        const percent = require('./percent');

        //绑定事件
        let btn = document.querySelector('#choujiang');

        btn.addEventListener('click', function () {
            //使用概率函数得到结果
            let res = percent(30);
            if (res) {
                alert('恭喜您中奖啦!!')
            } else {
                alert('再接再厉!!');
            }
        });

    }, { "./percent": 2 }], 2: [function (require, module, exports) {
        //引入 rand 模块
        const rand = require('./rand');

        function percent(num) {
            //获取一个 从 1-100 的随机数
            let n = rand(1, 100);
            //判断
            if (n <= num) {
                return true;
            } else {
                return false;
            }
        }

        //对外暴露
        module.exports = percent;


    }, { "./rand": 3 }], 3: [function (require, module, exports) {
        function rand(m, n) {
            return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
        }

        module.exports = rand;
    }, {}]
}, {}, [1]);
