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
            <div className="x-list sled">
                <ListItem
                    list={this.props.sledList}
                    handleDetial = {this.props.handleDetial.bind(this)}
                    type="2"></ListItem>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        sledList : state.MainReducer.sledList,
        token : state.MainReducer.token,
    }
}
module.exports = IntervalEnhance(connect(mapStateToProps)(SlingContainer));
