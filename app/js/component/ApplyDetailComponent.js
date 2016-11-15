/**
 * Created by 1 on 2016/11/4.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Card,Table,Icon  } from 'antd-mobile';
import { getLogListRequest } from 'actions/index';

const columns = [
    { title: '操作行为', dataIndex: 'code', key: 'code',width:'500px',className:'center' },
    { title: '操作人员', dataIndex: 'handleid', key: 'handleid',width:'160px',className:'center' },
    { title: '操作时间', dataIndex: 'addtime', key: 'addtime',width:'300px',className:'center' },
];

class ApplyDetailComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible : false,
        }
        let apply = this.props.location.state.apply;
        let params = {token : this.props.token,apply_id:apply.id};
        this.props.dispatch(getLogListRequest(params));
    }
    handleExpand(){
        this.setState({
            visible : !this.state.visible,
        })
    }
    render(){
        console.log(this.state.visible);
        let apply = this.props.location.state.apply;
        return(
            <div className="detail-card">
                <Card >
                    <Card.Header
                        title={apply.prod}
                        extra={<span>{apply.addtime.substr(0,10)}</span>}
                    />
                    <Card.Body>
                        <div>
                            <section className="detail-col">
                                <label>合同号：{apply.contract}</label>
                            </section>
                            <section className="detail-col">
                                <label>姓名：{apply.username}</label>
                            </section>
                            <section className="detail-col">
                                <label>手机号：{apply.phone}</label>
                            </section>
                            <section className="detail-col">
                                <label>身份证：{apply.certno}</label>
                            </section>
                            <section className="detail-col">
                                <label>申请金额：{apply.money}万元</label>
                            </section>
                            <section className="detail-col">
                                <label>贷款期限：{apply.qx}年</label>
                            </section>
                            <section className="detail-col">
                                <label>镇/街道：{apply.city}/{apply.street}</label>
                            </section>
                            <section className="detail-col">
                                <label>详细地址：{apply.addr}</label>
                            </section>
                        </div>

                    </Card.Body>
                    <Card.Footer content={<span onClick={this.handleExpand.bind(this)}>展开/收缩操作日志<Icon type={this.state.visible ? "up" : "down"} /></span>} extra={<div className={apply.state}>{apply.state}</div>} />
                </Card>
                <Table
                    columns = {columns}
                    dataSource = {this.props.logList}
                    className={this.state.visible ? '' : 'hide'}
                    scrollX = {true}
                >

                </Table>
            </div>
        );
    }
}
function mapStateToProps (state){
    return {
        token : state.MainReducer.token,
        logList : state.MainReducer.logList,
    }
}
module.exports = connect(mapStateToProps)(ApplyDetailComponent);
