/**
 * Created by 1 on 2016/11/1.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ListItem from 'component/ListItem';
import { Modal,InputItem ,List, Toast  } from 'antd-mobile';
import { doSlingRequest, doSledRequest, doNotslRequest } from 'actions/index';
import { IntervalEnhance  } from 'component/CommonComponent';

const prompt = Modal.prompt;


class UnslContainer extends React.Component {
    constructor(props){
        super(props);
    }
    handleSling(id){
        let params = {token : this.props.token,state : '2',ids : id};
        this.props.dispatch(doSlingRequest(params));
    }
    handleYJ(id){
        this.props.history.push({
            pathname : 'wdselect',
            state : {id:id},
        });
    }

    render(){
        return(
            <div className="x-list unsl">
                <ListItem
                    list={this.props.unslList}
                    type="0"
                    handleSling={this.handleSling.bind(this)}
                    handleYJ = {this.handleYJ.bind(this)}
                    handleSled = {this.props.handleSled.bind(this)}
                    handleNotsl = {this.props.handleNotsl.bind(this)}
                    handleDetial = {this.props.handleDetial.bind(this)}
                >

                </ListItem>
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        unslList : state.MainReducer.unslList,
        wdList : state.MainReducer.wdList,
        token : state.MainReducer.token,
    }
}
module.exports = IntervalEnhance(connect(mapStateToProps)(UnslContainer));
