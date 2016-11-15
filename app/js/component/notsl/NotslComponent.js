/**
 * Created by 1 on 2016/11/8.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { List,TextareaItem,WhiteSpace,WingBlank,Button,Toast,Picker } from 'antd-mobile';
import { createForm } from 'rc-form';
import { doNotslRequest } from 'actions/index';

class NotslComponent extends React.Component{
    constructor(props){
        super(props);

    }
    handleSubmit(){
        let id = this.props.location.state.id;
        let token = this.props.location.state.token;
        this.props.form.validateFields({ force: true }, (error, values) => {
            if (!error) {
                if(values.reason !== undefined && values.reason[0] !== '0'){//排除其他和und
                    let params = {
                        ids:id,
                        token:this.props.token,
                        reason:values.reason[0],
                        state:'4',
                        type:this.props.selectedIndex,
                    };
                    this.props.dispatch(doNotslRequest(params));
                }else if(values.reasoncontent){//其他拒绝原因
                    let params = {
                        ids:id,
                        token:this.props.token,
                        reasoncontent:values.reasoncontent,
                        state:'4',
                        type:this.props.selectedIndex,
                    };
                    this.props.dispatch(doNotslRequest(params));
                }else{
                    Toast.fail("请填写拒绝原因",2);
                }
            } else {
                Toast.fail("请填写拒绝原因",2);
            }
        });
    }
    render(){
        const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

        const reasonProps = getFieldProps('reason',{
            validateTrigger: 'onBlur',
            rules:[
                { required:true,type:'array',message:'请选择拒受理原因'}
            ]
        });
        const reasoncontentProps = getFieldProps('reasoncontent', {
            validateTrigger: 'onBlur',
            rules: [
                { required:true,message:'请填写拒绝原因' },
            ],
        });
        return(
            <div>
                <WhiteSpace />
                <List>
                    <Picker
                        data={this.props.reasonList}
                        cols={1}
                        {...getFieldProps('reason')}
                        title="拒绝原因"
                    >
                        <List.Item arrow="horizontal">拒绝原因</List.Item>
                    </Picker>
                    <TextareaItem
                        {...getFieldProps('reasoncontent')}
                        title="其他说明"
                        rows={3}
                        error={!!getFieldError('reasoncontent')}
                        onErrorClick={() => {
                            Toast.fail(getFieldError('reasoncontent') ,1.5)
                        }}
                        count={100}
                    />
                </List>
                <WhiteSpace />
                <WingBlank size="lg">
                    <Button type="primary" onClick={this.handleSubmit.bind(this)}>提交</Button>
                </WingBlank>
            </div>
        );
    }
}
function mapStateToProps(state) {
    return {
        token: state.MainReducer.token,
        selectedIndex: state.MainReducer.selectedIndex,
        reasonList : state.MainReducer.reasonList,
    }
}
module .exports = connect(mapStateToProps)(createForm()(NotslComponent));