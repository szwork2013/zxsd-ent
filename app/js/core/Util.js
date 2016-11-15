/**
 * Created by 1 on 2016/9/30.
 * 金朝祥的通用控制类
 */

/******************
 * 1.浏览器方法
 * *****************/
export const brower = new class {
    constructor(){
        this.ua = navigator.userAgent.toLowerCase();
        console.log(this.ua);
    }
    /*获取微信版本*/
    getWechatVersion(){
        let wechatInfo = this.ua.match(/MicroMessenger\/([\d\.]+)/i);
        if(wechatInfo && wechatInfo[1] < "5.0"){
            alert('微信支付仅支持微信5.0以上的版本'+"\n"+"请更新微信客户端");
        }
    }
    /*是否在微信浏览器中*/
    isWeixin(){
        if(this.ua.match(/MicroMessenger/i) === "micromessenger"){
            return true;
        }else{
            return false;
        }
    }
    /*判断浏览器类型*/
    getBrowerType(){
        let browerInfo = {
            trident: this.ua.indexOf('trident') > -1, //IE内核
            presto: this.ua.indexOf('presto') > -1, //opera内核
            webkit: this.ua.indexOf('applewebkit') > -1 || this.ua.indexOf('chrome') > -1, //苹果、谷歌内核
            gecko: this.ua.indexOf('gecko') > -1 && this.ua.indexOf('khtml') > -1, //火狐内核
            mobile: !!this.ua.match(/applewebKit.*mobile.*/)||!!this.ua.match(/applewebKit/), //是否为移动终端
            ios: !!this.ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: this.ua.indexOf('Android') > -1 || this.ua.indexOf('Linux') > -1, //android终端或者uc浏览器
            iPhone: this.ua.indexOf('iphone') > -1 || this.ua.indexOf('mac') > -1, //是否为iPhone或者安卓QQ浏览器
            iPad: this.ua.indexOf('iPad') > -1, //是否为iPad
            webApp: this.ua.indexOf('safari') > -1 ,//是否为web应用程序，没有头部与底部
        };
        console.log(browerInfo);
        return browerInfo;
    }
}

export function checkHttpStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function parseJSON(response) {
    return response.json()
}
