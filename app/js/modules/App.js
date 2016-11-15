/**
 * Created by 1 on 2016/11/1.
 */

import React from 'react';
import ReactDom from 'react-dom';
import { SegmentedControl } from 'antd-mobile';
import { connect } from 'react-redux';
import { getUnslListRequest,getSlingListRequest,getSledListRequest,getNotslListRequest } from 'actions/index';
class App extends React.Component{
    constructor(props){
        super(props);
    }
    onChange(e) {
        switch (e.nativeEvent.selectedSegmentIndex){
            case 0:
                this.props.dispatch(getUnslListRequest(this.props.token));
                this.props.history.replace({
                    pathname : '/unsl',
                });
                break;
            case 1:
                this.props.dispatch(getSlingListRequest(this.props.token));
                this.props.history.replace({
                    pathname : '/sling',
                });
                break;
            case 2:
                this.props.dispatch(getSledListRequest(this.props.token));
                this.props.history.replace({
                    pathname : '/sled',
                });
                break;
            case 3:
                this.props.dispatch(getNotslListRequest(this.props.token));
                this.props.history.replace({
                    pathname : '/notsl',
                });
                break;
        }
    }
    render(){
        return(
            <div>
                <div className="segment-control">
                    <SegmentedControl
                        values={['未受理', '受理中', '受理成功','拒绝受理']}
                        selectedIndex = {this.props.selectedIndex}
                        tintColor = {'#99CCFF'}
                        onChange={this.onChange.bind(this)}
                    />
                </div>

                {this.props.children}
            </div>
        );
    }
}
function mapStateToProps(state){
    return {
        token : state.MainReducer.token,
        selectedIndex : state.MainReducer.selectedIndex,
    }
}
module.exports  = connect(mapStateToProps)(App);
