import { Component } from "react";
import { Button, Form, Input } from 'antd';

class AddProductFirm extends Component{
    onFinish = (values) => {
        // console.log(values);
        this.props.getMsg(values);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return <div>
                <Form
                    name="添加商品"
                    style={{
                    maxWidth: 600,
                    }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                    label="书名"
                    name="name"
                    rules={[
                        {
                        required: true,
                        message: '请输入书名！',
                        },
                    ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                    label="价格"
                    name="price"
                    rules={[
                        {
                        required: true,
                        message: '请输入价格',
                        },
                    ]}
                    >
                        <Input/>
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

export default AddProductFirm;