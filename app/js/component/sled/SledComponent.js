/**
 * Created by 1 on 2016/11/8.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { List,InputItem,WhiteSpace,WingBlank,Button,Toast } from 'antd-mobile';
import { createForm } from 'rc-form';
import { doSledRequest } from 'actions/index';

class SledComponent extends React.Component{
    constructor(props){
        super(props);

    }
    handleSubmit(){
        let id = this.props.location.state.id;
        let token = this.props.location.state.token;
        this.props.form.validateFields({ force: true }, (error, values) => {
            if (!error) {
                let _param = {
                    id: id,
                    token: this.props.token,
                    contract: values.contract,
                    realmoney:values.realmoney,
                    type:this.props.selectedIndex,
                };
                this.props.dispatch(doSledRequest(_param));
            } else {

            }
        });
    }
    handleReset(){
        this.props.form.resetFields();
    }
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

        const contractProps = getFieldProps('contract',{
            validateTrigger: 'onBlur',
            rules:[
                { required:true,len:16,message:'填写16位合同号'}
            ]
        });
        const realmoneyProps = getFieldProps('realmoney', {
            validateTrigger: 'onBlur',
            rules: [
                { required:true,message:'请填写贷款金额' },
            ],
        });
        return(
            <div>
                <WhiteSpace />
                <List>
                    <InputItem
                        {...contractProps}
                        placeholder="请填写合同号"
                        error = {!!getFieldError('contract')}
                        onErrorClick={() => {
                            Toast.fail(getFieldError('contract') ,1.5)
                        }}
                    >
                        合同号
                    </InputItem>

                    <InputItem
                        {...realmoneyProps}
                        placeholder="请填写贷款金额"
                        maxLength={3}
                        type="number"
                        error = {!!getFieldError('realmoney')}
                        onErrorClick={() => {
                            Toast.fail(getFieldError('realmoney') ,1.5)
                        }}
                        extra="万元"
                    >
                        贷款金额
                    </InputItem>
                </List>
                <WhiteSpace />
                <WingBlank size="lg">
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                    <WhiteSpace />
                    <Button onClick={this.handleReset.bind(this)}>重置</Button>
                </WingBlank>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        token: state.MainReducer.token,
        selectedIndex: state.MainReducer.selectedIndex,
    }
}
module .exports = connect(mapStateToProps)(createForm()(SledComponent));