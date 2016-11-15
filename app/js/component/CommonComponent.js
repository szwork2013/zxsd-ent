/**
 * Created by 1 on 2016/11/3.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { connect } from 'react-redux';
import { Modal,Toast  } from 'antd-mobile';
import { doSledRequest, doNotslRequest } from 'actions/index';
const prompt = Modal.prompt;

export function IntervalEnhance(Component) {
    class CommonComponent extends React.Component {
        constructor(props){
            super(props);
        }
        handleSled(id) {
            this.props.history.push({
                pathname:'sledm',
                state:{id:id}
            });
        }

        handleNotsl(id) {
            this.props.history.push({
                pathname:'notslm',
                state:{id:id}
            });
        }
        handleDetial(obj){
            this.props.history.push({
                pathname:'detail',
                state : { apply : obj}
            })
        }
        render() {
            return (
                <div>
                    {
                        (this.props.unslList.length !== 0 && this.props.selectedIndex === 0) ||
                        (this.props.slingList.length !== 0 && this.props.selectedIndex === 1) ||
                        (this.props.sledList.length !== 0 && this.props.selectedIndex === 2) ||
                        (this.props.notslList.length !== 0 && this.props.selectedIndex === 3) ?
                        <Component
                            handleSled = {this.handleSled.bind(this)}
                            handleNotsl = {this.handleNotsl.bind(this)}
                            handleDetial = {this.handleDetial.bind(this)}
                            {...this.props}
                            {...this.state}
                        /> :
                        <div className="emptydate">
                            <p >空空如也</p>
                        </div>
                    }


                </div>);
        }
    }
    const mapStateToProps = (state)=> ({
        unslList : state.MainReducer.unslList,
        slingList : state.MainReducer.slingList,
        sledList : state.MainReducer.sledList,
        notslList : state.MainReducer.notslList,
        token: state.MainReducer.token,
        selectedIndex: state.MainReducer.selectedIndex,
    })

    return connect(mapStateToProps)(CommonComponent);
}

