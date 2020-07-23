//使用解构的形式引入模块
import {rand} from './rand';

export function percent(num){
    //获取一个 从 1-100 的随机数
    let n = rand(1,100);
    //判断
    if(n <= num){
        return true;
    }else{
        return false;
    }
}
