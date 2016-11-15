/**
 * Created by 1 on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Accordion, List } from 'antd-mobile';
import { doTransferRequest } from 'actions/index';

class WdSelectComponent extends React.Component{
    constructor(props){
        super(props);
    }
    handleClick(i){
        let params = {
            ids : this.props.location.state.id,
            wd : i,
            token : this.props.token,
        }
        console.log(params);
        this.props.dispatch(doTransferRequest(params));
    }
    render(){
        let zhList = [];
        this.props.wdList.map((zh,i) => {
            let wdList = [];
            this.props.wdList[i].children.map((wd,j) => {
                wdList.push(<List.Item key={wd.value} onClick={this.handleClick.bind(this,wd.value)}>{wd.label}</List.Item>);
            });
            zhList.push(
                <Accordion.Panel header={zh.label}>
                    {wdList}
                </Accordion.Panel>
            );
        });
        return(
            <div>
                <Accordion

                >
                    {zhList}
                </Accordion>
            </div>

        );
    }
}
function mapStateToProps(state){
    return {
        wdList : state.MainReducer.wdList,
        token : state.MainReducer.token,
    }
}
module .exports = connect(mapStateToProps)(WdSelectComponent);