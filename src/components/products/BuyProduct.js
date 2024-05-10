import { Modal } from "antd";
import { Component } from "react";
import BuyProductFirm from "./BuyProductFirm";

class BuyProduct extends Component {
    state = {
        msg: {}
    }
    
    getMsg = (msg) => {
        this.setState({msg: msg});
    }

    handleOk = () => {
        console.log(this.state.msg);
        this.setState({msg: {}});
        this.props.close();
    }

    render() {
        return (
            <div>
                <Modal
                    open = {this.props.open}
                    title = "购买商品"
                    okText = "购买"
                    cancelText = "取消"
                    width = "800px"
                    onCancel = {() => this.props.close()}
                    onOk = {this.handleOk}
                    destroyOnClose
                >
                    <BuyProductFirm getMsg = {this.getMsg}></BuyProductFirm>
                </Modal>
            </div>
        );
    }
}

export default BuyProduct;