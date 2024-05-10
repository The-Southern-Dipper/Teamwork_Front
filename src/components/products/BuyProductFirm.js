import { Button, Form, Input } from 'antd';
import { Component } from "react";

class BuyProductFirm extends Component{
    onFinish = (values) => {
        this.props.getMsg(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return <div>
            <Form
                name="添加商品"
                style={{maxWidth: 600,}}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="购买人姓名"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: '请输入姓名！',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="购买人联系方式"
                    name="contact"
                    rules={[
                        {
                        required: true,
                        message: '请输入联系方式！',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
            </Form>
        </div>
    }
}

export default BuyProductFirm;