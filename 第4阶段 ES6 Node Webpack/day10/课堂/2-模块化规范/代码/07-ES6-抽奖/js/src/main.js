//引入 percent 模块
import { percent } from './percent';


window.onload = function () {
    //获取元素 
    let btn = document.querySelector('button');
    //绑定事件
    btn.onclick = function () {
        //获取概率的结果
        let result = percent(20);
        //判断结果  陈翔六点半
        if (result) {
            alert('恭喜您中奖啦!! 泰国五日游');
        } else {
            alert('sorry 参与奖!!');
        }
    }
}