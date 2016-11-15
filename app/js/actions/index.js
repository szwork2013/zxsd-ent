/**
 * Created by 1 on 2016/6/27.
 */

import { HEADURL,GET_UNSL_LIST,GET_SLING_LIST,GET_SLED_LIST,GET_NOTSL_LIST,GET_LOG_LIST } from 'core/Const';
import { Toast } from 'antd-mobile';
import { push } from 'react-router-redux';
/*
* action
* */
export const getUnslListAction = function(json){
    return {
        type:GET_UNSL_LIST,
        unslList : json.unslList,
        wdList : json.wdList,
        reasonList : json.reasonList,
        token : json.token,
    }
}
export const getSlingListAction = function(json){
    return {
        type:GET_SLING_LIST,
        slingList : json.slingList,
    }
}
export const getSledListAction = function(json){
    return {
        type:GET_SLED_LIST,
        sledList : json.sledList,
    }
}
export const getNotslListAction = function(json){
    return {
        type:GET_NOTSL_LIST,
        notslList : json.notslList,
    }
}
export const getLogListAction = function(json){
    return {
        type:GET_LOG_LIST,
        logList:json.logList,
    }
}
/**
 * request
 * */
export const getUnslListRequest = function( _token ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=getUnslList",
            type:"post",
            dataType:"json",
            data:{token : _token},
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getUnslListAction(res));

                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
export const getSlingListRequest = function( _token){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=getSlingList",
            type:"post",
            dataType:"json",
            data:{ token : _token},
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getSlingListAction(res));
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
export const getSledListRequest = function( _token ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=getSledList",
            type:"post",
            dataType:"json",
            data:{ token : _token },
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getSledListAction(res));
                }
            },
            error:function(res){

                alert('出错啦');
            }
        });
    }
}
export const getNotslListRequest = function( _token ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=getNotslList",
            type:"post",
            dataType:"json",
            data:{ token : _token},
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getNotslListAction(res));
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
/*
* 修改信件状态为受理中
* 参数 token,state,ids
* name 权限密钥 状态码 信件主键
* example {'111','1',['1']}
* */
export const doSlingRequest = function( _params ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=doStateChangeRequest",
            type:"post",
            dataType:"json",
            data:_params,
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getUnslListRequest(res.token));
                    Toast.success(res.msg,2);
                }else{
                    Toast.fail(res.msg,2);
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
/*
 * 网点移交
 * 参数 token,wd,ids
 * name 权限密钥 网点id 信件主键
 * example {'111','2',['1']}
 * */
export const doTransferRequest = function( _params ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=doTransferRequest",
            type:"post",
            dataType:"json",
            data:_params,
            success:function(res){
                if(res.status == '2002'){
                    dispatch(getUnslListRequest(res.token));
                    dispatch(push('/unsl'));
                    Toast.success(res.msg,2);
                }else{
                    Toast.fail(res.msg,2);
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
/*
 * 受理成功
 * 参数 token,contract,id
 * name 权限密钥 合同号 信件主键
 * example {'111','88888888','1'}
 * */
export const doSledRequest = function( _params ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=updateApplyContract",
            type:"post",
            dataType:"json",
            data:_params,
            success:function(res){

                if(res.status == '2002'){
                    if(_params.type == '0'){
                        dispatch(getUnslListRequest(_params.token));
                        dispatch(push('/unsl'));
                    }else if(_params.type == '1'){
                        dispatch(getSlingListRequest(_params.token));
                        dispatch(push('/sling'));
                    }
                    Toast.success(res.msg,2);
                }else{
                    Toast.fail(res.msg,2);
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}
/*
 * 拒绝受理
 * 参数 token,state,reason,id
 * name 权限密钥 ，状态,拒绝原因 信件主键
 * example {'111','4','审核不通过','1'}
 * */
export const doNotslRequest = function( _params ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=doStateChangeRequest",
            type:"post",
            dataType:"json",
            data:_params,
            success:function(res){
                console.log(res);
                if(res.status == '2002'){
                    if(_params.type == '0'){
                        dispatch(getUnslListRequest(_params.token));
                        dispatch(push('/unsl'));
                    }else if(_params.type == '1'){
                        dispatch(getSlingListRequest(_params.token));
                        dispatch(push('/sling'));
                    }
                    Toast.success(res.msg,2);
                }else{
                    Toast.fail(res.msg,2);
                }
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}

/*
 * 获取日志
 * 参数 token,apply_id
 * name 权限密钥 ,信件主键
 * example {'111','1'}
 * */
export const getLogListRequest = function( _params ){
    return function(dispatch) {
        return $.ajax({
            url:HEADURL+"Wxhsz.php?m=WxHSZ&c=ZxsdAPI&a=getLogList",
            type:"post",
            dataType:"json",
            data:_params,
            success:function(res){
                console.log(res);
                dispatch(getLogListAction(res));
            },
            error:function(res){
                alert('出错啦');
            }
        });
    }
}






