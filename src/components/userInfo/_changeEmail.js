import { Form, Input, Button, Modal } from 'antd'
import {  changeEmailAPI, fetchUserInfo } from '../../store/modules/user'
import { useDispatch } from 'react-redux'

const _changeEmail = (props) => {
    const dispatch = useDispatch();

    const onFinish = (value) => {
        changeEmailAPI(value).then((res) => {
            if (res.code == 0) {
                dispatch(fetchUserInfo())
                props.close()
            } else {
                alert("修改失败")
            }
        })
    }

    return (
        <Modal
            title="修改邮箱"
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
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: '邮箱不能为空！',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="请输入新的邮箱"
                    ></Input>
                </Form.Item>

                <Form.Item
                    name="captcha"
                    rules={[
                        {
                            required: true,
                            message: '验证码不能为空！',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="请输入验证码"
                    ></Input>
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

export default _changeEmail