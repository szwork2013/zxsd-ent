/**
 * Created by 1 on 2016/11/2.
 */
import React from 'react';
import ReactDom from 'react-dom';
import { Icon } from 'antd-mobile';

class ListItem extends React.Component{
    constructor(props){
        super(props);
    }
    handleSling(id,e){
        e.stopPropagation();
        this.props.handleSling(id);
    }
    handleYJ(id,e){
        console.log(e);
        e.stopPropagation();
        this.props.handleYJ(id);
    }
    handleSled(id,e){
        e.stopPropagation();
        this.props.handleSled(id);
    }
    handleNotsl(id,e){
        e.stopPropagation();
        this.props.handleNotsl(id);
    }
    handleDetial(obj){
        this.props.handleDetial(obj);
    }
    render(){
        let list = [];
        this.props.list.map((obj,index) => {
            list.push(
                <section className = "list-item" key={index} onClick={this.handleDetial.bind(this,obj)}>
                    <header>
                        {obj.prod}<Icon className={obj.id === apply_id ? "" : "hide"} style={{float:"right",lineHeight:"2",marginRight:"24px"}} type="tags" />
                        <label className="list-item-addtime">{obj.addtime.substr(0,10)}</label>
                    </header>
                    <article>
                        <section>
                            <label >姓名:</label><label>{obj.username}</label>
                            <button className={this.props.type === '0' ? "yj-btn" : "hide" } onClick={this.handleYJ.bind(this,obj.id)}><span>移交</span></button>
                        </section>
                        <section>
                            <label>手机号:</label><label>{obj.phone}</label>
                        </section>
                        <section>
                            <label>申请金额</label>:{obj.money}万元

                        </section>
                    </article>
                    <footer>
                        <label className={this.props.type === '0'  ? "active" : "hide"} onClick={this.handleSling.bind(this,obj.id)}><Icon type="clock-circle-o" />受理中</label>
                        <label className={this.props.type === '0' || this.props.type === '1' ? "active" : "hide"} onClick={this.handleSled.bind(this,obj.id)}><Icon type="check-circle-o" />受理成功</label>
                        <label className={this.props.type === '0' || this.props.type === '1' ? "active" : "hide"} onClick={this.handleNotsl.bind(this,obj.id)}><Icon type="cross-circle-o" />拒绝受理</label>
                    </footer>

                </section>
            );
        });
        return(
            <div>
                {list}
            </div>

        );
    }
}
module .exports = ListItem;