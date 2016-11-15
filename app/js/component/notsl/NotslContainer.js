/**
 * Created by 1 on 2016/11/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import ListItem from 'component/ListItem';

import { IntervalEnhance  } from 'component/CommonComponent';

class NotslContainer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="x-list notsl">
                <ListItem
                    list={this.props.notslList}
                    type="3"
                    handleDetial = {this.props.handleDetial.bind(this)}
                >

                </ListItem>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        notslList : state.MainReducer.notslList,
        token : state.MainReducer.token,
    }
}
module.exports = IntervalEnhance(connect(mapStateToProps)(NotslContainer));
