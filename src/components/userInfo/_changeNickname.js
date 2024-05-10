import { Form, Input, Button, Modal } from 'antd'
import { changeNicknameAPI, fetchUserInfo } from '../../store/modules/user'
import { useDispatch, useSelector } from 'react-redux'

const _changeNickname = (props) => {
    const dispatch = useDispatch();

    const onFinish = (value) => {
        changeNicknameAPI(value).then((res) => {
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
            title="修改昵称"
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
                    name="nickname"
                    rules={[
                        {
                            required: true,
                            message: '昵称不能为空！',
                        },
                    ]}
                >
                    <Input
                        size="large"
                        placeholder="请输入新的昵称"
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

export default _changeNickname