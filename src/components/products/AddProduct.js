import { Component } from "react";
import {Modal} from "antd"
import AddProductFirm from "./AddProductFirm";

class AddProduct extends Component{
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
            <Modal
                title = '添加售卖书籍信息'
                open = {this.props.open}
                onOk = {this.handleOk}
                onCancel = {() => this.props.close()}
                okText = '添加'
                cancelText = '取消'
                destroyOnClose
                width = "800px"
            >
                <AddProductFirm getMsg = {this.getMsg}></AddProductFirm>
            </Modal>
        )
    }
}

export default AddProduct;