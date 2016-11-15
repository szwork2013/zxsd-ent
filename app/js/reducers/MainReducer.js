/**
 * Created by 1 on 2016/8/15.
 */
import { GET_UNSL_LIST,GET_SLING_LIST,GET_SLED_LIST,GET_NOTSL_LIST,LOADING,GET_LOG_LIST } from 'core/Const';

export const MainReducer  = function(state = {
    unslList : [],
    slingList : [],
    sledList : [],
    notslList : [],
    wdList : [],
    loading : true,
    selectedIndex : 0,
    logList : [],
    token : "",
},action){
    switch (action.type){
        case GET_UNSL_LIST:
            return Object.assign({},state,{
                unslList : action.unslList,
                wdList : action.wdList,
                reasonList : action.reasonList,
                token : action.token,
                loading : false,
                selectedIndex : 0,
            });
        case GET_SLING_LIST:
            return Object.assign({},state,{
                slingList : action.slingList,
                selectedIndex : 1,
                loading : false,
            });
        case GET_SLED_LIST:
            return Object.assign({},state,{
                sledList : action.sledList,
                selectedIndex : 2,
                loading : false,
            });
        case GET_NOTSL_LIST:
            return Object.assign({},state,{
                notslList : action.notslList,
                selectedIndex : 3,
                loading : false,
            });
        case GET_LOG_LIST:
            let logList = [];
            //for(let obj of action.logList){
            //    obj.addtime = obj.addtime.substr(0,10);
            //    logList.push(obj);
            //}

            return Object.assign({},state,{
                logList : action.logList,
            });
        case LOADING :
            return Object.assign({},state,{
                loading : true,
            })
        default:
            return state;
    }
}
