/**
 * Created by 1 on 2016/11/2.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ListItem from 'component/ListItem';

import { IntervalEnhance  } from 'component/CommonComponent';

class SlingContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="x-list sling">
                <ListItem
                    list={this.props.slingList}
                    type="1"
                    handleSled = {this.props.handleSled.bind(this)}
                    handleNotsl = {this.props.handleNotsl.bind(this)}
                    handleDetial = {this.props.handleDetial.bind(this)}
                ></ListItem>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        slingList : state.MainReducer.slingList,
        token : state.MainReducer.token,
    }
}
module.exports = IntervalEnhance(connect(mapStateToProps)(SlingContainer));
