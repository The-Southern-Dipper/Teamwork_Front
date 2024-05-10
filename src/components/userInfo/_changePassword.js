import { Form, Input, Button, Modal } from 'antd'
import {changePasswordAPI} from '../../store/modules/user'

const _changePassword = (props) => {
    const onFinish = (value) => {
        changePasswordAPI(value).then((res) => {
            if (res.code == 0) {
                alert("修改成功")
                props.close()
            } else {
                alert(res.massage)
            }
        })
    }

    return (
        <Modal
            title="修改密码"
            open={props.open}
            onCancel={() => props.close()}
            footer={null}
            wrapClassName="pwdpage"
            destroyOnClose
        >
            <Form
                onFinish={onFinish}
            >
                <Form.Item
                    name="oldPwd"
                    rules={[
                        {
                            required: true,
                            message: '请输入原来的密码！',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        placeholder="请输入原来的密码"
                    ></Input.Password>
                </Form.Item>

                <Form.Item
                    name="newPwd"
                    rules={[
                        {
                            required: true,
                            message: '请输入新的密码！',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        placeholder="请输入新的密码"
                    ></Input.Password>
                </Form.Item>

                <Form.Item
                    name="confirmPwd"
                    rules={[
                        {
                            required: true,
                            message: '请确认您的密码！',
                        },
                    ]}
                >
                    <Input.Password
                        size="large"
                        placeholder="请确认您的密码"
                    ></Input.Password>
                </Form.Item>

                <Form.Item>
                    <Button
                        type="primary"
                        htmlType="submit"
                        size="large"
                        className="button2"
                    >
                        确认
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default _changePassword